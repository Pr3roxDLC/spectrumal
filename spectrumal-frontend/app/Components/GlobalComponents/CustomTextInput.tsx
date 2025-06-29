import React from 'react'
import { View, TextInput } from 'react-native';
import { BlurView } from 'expo-blur';
import styles from '../ComponentStyles/CustomTextInputStyles';

export interface Props {
  placeholder: string
  value?: any
  onChange?: (text: string) => void
}

const CustomTextInput = (props: Props) => {
  return (
    <View style={styles.container}>
      <BlurView intensity={70} tint="dark" style={styles.blurContainer}>
        <TextInput value={props.value}
          onChangeText={props.onChange} placeholderTextColor="#B5C5E3" placeholder={props.placeholder}
          style={styles.input}
        />
      </BlurView>
    </View>
  )
}

export default CustomTextInput
