import React, { useEffect, useRef } from 'react';
import { Animated, Easing } from 'react-native';
import { changeTabAction, TabType } from '../../store/features/navigation/navigationSlice';
import { useAppDispatch } from '../../store/hooks';
import variables from '../../../assets/variables/Variables';
import styles from './SplashScreenStyles';

const SplashScreen = () => {
  const dispatch = useAppDispatch();

  const fadeAnim = useRef(new Animated.Value(0)).current;
  const containerFade = useRef(new Animated.Value(1)).current;
  const scaleAnim = useRef(new Animated.Value(2.5)).current;
  const rotateYAnim = useRef(new Animated.Value(90)).current;
  const glowAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // Glow loop animation (no native driver because textShadowRadius doesn't support it)
    Animated.loop(
      Animated.sequence([
        Animated.timing(glowAnim, {
          toValue: 1,
          duration: 800,
          easing: Easing.inOut(Easing.ease),
          useNativeDriver: false,
        }),
        Animated.timing(glowAnim, {
          toValue: 0,
          duration: 800,
          easing: Easing.inOut(Easing.ease),
          useNativeDriver: false,
        }),
      ])
    ).start();

    // Main animation sequence
    Animated.sequence([
      Animated.parallel([
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 1000,
          easing: Easing.out(Easing.ease),
          useNativeDriver: true,
        }),
        Animated.timing(scaleAnim, {
          toValue: 1,
          duration: 1000,
          easing: Easing.out(Easing.ease),
          useNativeDriver: true,
        }),
        Animated.timing(rotateYAnim, {
          toValue: 0,
          duration: 1000,
          easing: Easing.out(Easing.ease),
          useNativeDriver: true,
        }),
      ]),
      Animated.delay(2000),
      Animated.parallel([
        Animated.timing(rotateYAnim, {
          toValue: -90,
          duration: 1000,
          easing: Easing.in(Easing.ease),
          useNativeDriver: true,
        }),
        Animated.timing(fadeAnim, {
          toValue: 0.7,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(scaleAnim, {
          toValue: 1.2,
          duration: 1000,
          easing: Easing.inOut(Easing.ease),
          useNativeDriver: true,
        }),
      ]),
      Animated.timing(containerFade, {
        toValue: 0,
        duration: 100,
        useNativeDriver: true,
      }),
    ]).start();

    // Trigger navigation 100ms before container fade completes (containerFade duration is 100ms)
    const totalDuration = 1000 + 2000 + 1000; // entrance + delay + exit flip
    const navDelay = totalDuration + 100; // 100ms fade out after exit flip starts

    const timer = setTimeout(() => {
      dispatch(changeTabAction({ type: TabType.MAIN_MENU }));
    }, navDelay);

    return () => clearTimeout(timer);
  }, [dispatch, fadeAnim, scaleAnim, rotateYAnim, glowAnim, containerFade]);

  const glow = glowAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 12],
  });

  const rotateY = rotateYAnim.interpolate({
    inputRange: [-90, 0, 90],
    outputRange: ['-90deg', '0deg', '90deg'],
  });

  return (
    <Animated.View style={[styles.container, { opacity: containerFade }]}>
      {/* Glow effect wrapper */}
      <Animated.Text
        style={[
          styles.text,
          {
            position: 'absolute',
            color: variables.colors.whiteText,
            textShadowColor: variables.colors.whiteText,
            textShadowOffset: { width: 0, height: 0 },
            textShadowRadius: glow,
          },
        ]}
      >
      </Animated.Text>

      {/* Main animated text with native driver */}
      <Animated.Text
        style={[
          styles.text,
          {
            opacity: fadeAnim,
            transform: [{ scale: scaleAnim }, { rotateY }],
            color: variables.colors.whiteText,
          },
        ]}
      >
        Spectrumal
      </Animated.Text>
    </Animated.View>
  );
};

export default SplashScreen;
