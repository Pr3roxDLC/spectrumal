import { BlurView } from 'expo-blur'
import React from 'react'
import styles from '../ComponentStyles/GlassContainerStyles'
import { DimensionValue } from 'react-native';

interface Props {
  children: React.ReactNode;
  width: DimensionValue;
  height: DimensionValue
}

const GlassContainer = ({ children, width, height }: Props) => {
  return (
    <BlurView style={[styles.container, {width: width, height: height}]}>{children}</BlurView>
  )
}

export default GlassContainer
