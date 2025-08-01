import React, { useEffect, useState, useRef } from 'react';
import { View, Text, Animated, Easing } from 'react-native';
import styles from './ContinuingRoundStyles';

const ContinuingRound = () => {
  const [count, setCount] = useState(20);
  const scaleAnim = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    if (count === 0) return;

    const timer = setTimeout(() => {
      setCount(prev => prev - 1);
    }, 1000);

    Animated.sequence([
      Animated.timing(scaleAnim, {
        toValue: count <= 5 ? 1.2 : 1.05,
        duration: 200,
        useNativeDriver: true,
        easing: Easing.out(Easing.quad),
      }),
      Animated.timing(scaleAnim, {
        toValue: 1,
        duration: 200,
        useNativeDriver: true,
        easing: Easing.in(Easing.quad),
      }),
    ]).start();

    return () => clearTimeout(timer);
  }, [count]);

  return (
    <View style={styles.continueRoundContainer}>
      <Text style={styles.text}>Continuing round in . . .</Text>
      <Animated.View
        style={[
          styles.countContainer,
          { transform: [{ scale: scaleAnim }] },
        ]}
      >
        <Text style={styles.countdown}>{count}</Text>
      </Animated.View>
    </View>
  );
};

export default ContinuingRound;
