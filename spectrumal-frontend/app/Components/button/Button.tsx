import React from 'react';
import { TouchableOpacity, Text, ViewStyle, DimensionValue, View, StyleSheet } from 'react-native';
import GlassContainer from '../glassContainer/GlassContainer';
import styles from './ButtonStyles';

export interface Props {
  label: string;
  onPress: () => void;
  style?: ViewStyle;
  width?: DimensionValue;
  disabled?: boolean;
}

const Button = (props: Props) => {
  const { label, onPress, style, disabled } = props;

  return (
    <View style={[style, styles.container]}>
      <TouchableOpacity
        style={{ height: '100%' }}
        activeOpacity={disabled ? 1 : 0.8}
        onPress={disabled ? undefined : () => onPress()}
        disabled={disabled}
      >
        <GlassContainer
          height={'100%'}
          style={disabled ? disabledStyles.disabledContainer : undefined}
        >
          <Text
            style={[
              styles.buttonText,
              disabled ? disabledStyles.disabledText : undefined,
            ]}
          >
            {label}
          </Text>
        </GlassContainer>
      </TouchableOpacity>
    </View>
  );
};

const disabledStyles = StyleSheet.create({
  disabledContainer: {
    backgroundColor: '#d3d3d3', 
    opacity: 0.5,
  },
  disabledText: {
    color: '#999',
  },
});

export default Button;
