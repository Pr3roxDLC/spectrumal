import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import styles from './GradientBackgroundStyles';

interface GradientBackgroundProps {
  children: React.ReactNode;
  style?: any
}

const GradientBackground = ({ children }: GradientBackgroundProps) => {
  return (
    <LinearGradient
      colors={['#0E2841', '#2C3E75', '#1A1D3A']}
      start={{ x: 0.5, y: 0 }}
      end={{ x: 0.5, y: 1 }}
      style={[styles.gradientBackground]}>
      {children}
    </LinearGradient>
  );
};

export default GradientBackground;
