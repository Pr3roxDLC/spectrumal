import React, { forwardRef } from 'react'
import { View, TextInput, DimensionValue, StyleProp, ViewStyle } from 'react-native';
import { BlurView } from 'expo-blur';
import styles from './CustomTextInputStyles';
import { TextInputProps } from 'react-native';

export interface Props extends TextInputProps {
  width?: DimensionValue;
  height?: DimensionValue;
  style?: StyleProp<ViewStyle>;
  compact?: boolean;
}



const CustomTextInput = forwardRef<TextInput, Props>(
  ({ width, height, style, compact, ...rest }, ref) => {
    return (
      <View style={[styles.container, { width, height }, style]}>
        <BlurView intensity={70} tint="dark" style={[
    styles.blurContainer,
    compact && styles.compactBlurContainer, 
  ]}>
          <TextInput
            ref={ref}
            placeholderTextColor="#B5C5E3"
             style={[
    styles.input,
    compact && styles.compactInput, 
  ]}
            {...rest} 
          />
        </BlurView>
      </View>
    );
  }
);


export default CustomTextInput
