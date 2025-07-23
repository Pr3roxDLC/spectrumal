import React, { useEffect, useRef } from 'react';
import { View, StyleSheet, Animated, Easing } from 'react-native';
import { changeTabAction, TabType } from '../../store/features/navigation/navigationSlice';
import { useAppDispatch } from '../../store/hooks';
import variables from '../../../assets/variables/Variables';

const SplashScreen = () => {
  const dispatch = useAppDispatch();

  const fadeAnim = useRef(new Animated.Value(0)).current;
  const containerFade = useRef(new Animated.Value(1)).current;
  const scaleAnim = useRef(new Animated.Value(2.5)).current;
  const rotateYAnim = useRef(new Animated.Value(90)).current;
  const glowAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // Loop glow effect
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

    // Trigger navigation 400ms after container fade starts (100ms before it ends)
    const timer = setTimeout(() => {
      dispatch(changeTabAction({ type: TabType.MAIN_MENU }));
    },  1000 + 2000 + 1000 + 500); 
    // Explanation of delay: 1000(entrance) + 2000(delay) + 1000(exit flip) + 400ms (fade start + 400ms)

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
      <Animated.Text
        style={[
          styles.text,
          {
            opacity: fadeAnim,
            transform: [{ scale: scaleAnim }, { rotateY }],
            textShadowColor: variables.colors.whiteText,
            textShadowOffset: { width: 0, height: 0 },
            textShadowRadius: glow,
          },
        ]}
      >
        Spectrumal
      </Animated.Text>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    perspective: 100,
  },
  text: {
    fontSize: 48,
    fontWeight: '900',
    color: variables.colors.whiteText,
    letterSpacing: 2,
    textAlign: 'center',
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 4,
  },
});

export default SplashScreen;
