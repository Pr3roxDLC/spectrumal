import React, { useRef } from 'react';
import { TouchableOpacity, Text, ViewStyle, DimensionValue, View, StyleProp } from 'react-native';
import GlassContainer from '../glassContainer/GlassContainer';
import styles from './ButtonStyles';
import { Audio } from 'expo-av';
import { useAudio } from '../../pages/SettingsPage/AudioContext';
import * as Haptics from 'expo-haptics';

export interface Props {
  label?: string;
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
  width?: DimensionValue;
  disabled?: boolean;
  children?: React.ReactNode
}

const Button = (props: Props) => {
  const { label, onPress, style, disabled } = props;
  const soundRef = useRef<Audio.Sound | null>(null);

   const playClickSound = async () => {
    try {
      if (!soundRef.current) {
        const { sound } = await Audio.Sound.createAsync(
          require('../../../assets/sounds/button-click.wav') 
        );
        soundRef.current = sound;
      }

      await soundRef.current?.replayAsync(); 
    } catch (error) {
      console.warn('Sound failed to play', error);
    }
  };

  const { isSfxEnabled, isHapticsEnabled } = useAudio(); 


const handlePress = async () => {
  if (isSfxEnabled) {
    await playClickSound();
  }

  if (isHapticsEnabled) {
    Haptics.selectionAsync();
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
  }

  onPress();
}

  return (
    <View style={[style, styles.container]}>
      <TouchableOpacity
        style={{ height: '100%' }}
        activeOpacity={disabled ? 1 : 0.8}
        onPress={disabled ? undefined : handlePress}
        disabled={disabled}
      >
        <GlassContainer
          height={'100%'}
          style={disabled ? styles.disabledContainer : undefined}
        >
          <Text
            style={[
              styles.buttonText,
              disabled ? styles.disabledText : undefined,
            ]}
          >
            {label}
          </Text>
        </GlassContainer>
      </TouchableOpacity>
    </View>
  );
};

export default Button;
