import { BlurView } from 'expo-blur'
import React from 'react'
import styles from '../ComponentStyles/GlassContainerStyles'
import { DimensionValue, StyleProp, ViewStyle } from 'react-native';

interface Props {
  children?: React.ReactNode;
  width: DimensionValue;
  height: DimensionValue;
  style?: StyleProp<ViewStyle>
}

const GlassContainer = ({ children, width, height, style }: Props) => {
  return (
    <BlurView style={[styles.container, { width, height }, style]}>{children}</BlurView>
  )
}

export default GlassContainer
