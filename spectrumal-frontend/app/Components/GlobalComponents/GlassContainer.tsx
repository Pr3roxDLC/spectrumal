import { BlurView } from 'expo-blur'
import React from 'react'
import styles from '../ComponentStyles/GlassContainerStyles'
import { DimensionValue, ViewStyle } from 'react-native';

interface Props {
  children?: React.ReactNode;
  width: DimensionValue;
  height: DimensionValue;
  style?: ViewStyle
}

const GlassContainer = ({ children, width, height }: Props) => {
  return (
    <BlurView style={[styles.container, {width: width, height: height}]}>{children}</BlurView>
  )
}

export default GlassContainer
