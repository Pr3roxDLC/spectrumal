import React, { useEffect, useState } from 'react'
import { View, Text, Animated, Easing } from 'react-native'
import styles from './GameStartingStyles'

const GameStarting = () => {
  const [countdown, setCountdown] = useState(3)
  const scale = new Animated.Value(1)

  useEffect(() => {
    const pulse = () => {
      Animated.sequence([
        Animated.timing(scale, {
          toValue: 1.2,
          duration: 300,
          easing: Easing.ease,
          useNativeDriver: true,
        }),
        Animated.timing(scale, {
          toValue: 1,
          duration: 300,
          easing: Easing.ease,
          useNativeDriver: true,
        }),
      ]).start()
    }

    if (countdown > 0) {
      const timer = setTimeout(() => {
        setCountdown((prev) => {
          pulse()
          return prev - 1
        })
      }, 1000)
      return () => clearTimeout(timer)
    }
  }, [countdown])

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Let’s Get Started!</Text>

      <View style={styles.messageContainer}>
        <Text style={styles.message}>Everyone’s in!</Text>
        <Text style={styles.message}>Locking in the chaos...</Text>
        <Text style={styles.message}>Generating secret targets 🧠</Text>
      </View>

      <Animated.Text style={[styles.countdown, { transform: [{ scale }] }]}>
        Starting in {countdown}...
      </Animated.Text>
    </View>
  )
}

export default GameStarting


