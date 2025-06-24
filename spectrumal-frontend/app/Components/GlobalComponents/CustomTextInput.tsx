import React from 'react'
import { View, TextInput } from 'react-native';
import { BlurView } from 'expo-blur';
import styles from '../ComponentStyles/CustomTextInputStyles';

export interface Props {
  placeholder: string
}

const CustomTextInput = (props: Props) => {
  return (
    <View style={styles.container}>
      <BlurView intensity={70} tint="dark" style={styles.blurContainer}>
        <TextInput placeholderTextColor="#B5C5E3" placeholder={props.placeholder}
          style={styles.input}
        />
      </BlurView>
    </View>
  )
}

export default CustomTextInput
