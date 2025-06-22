import React from 'react'
import { TouchableOpacity, Text, StyleProp, ViewStyle } from 'react-native';
import styles from '../ComponentStyles/ButtonStyles';

export interface Props {
    label: string;
    onPress: () => void;
    style: ViewStyle
}

const Button = (props: Props) => {

    return (
        <TouchableOpacity style={[styles.button, props.style]} onPress={() => props.onPress()}>
            <Text style={styles.buttonText}>{props.label}</Text>
        </TouchableOpacity>
    )
}

export default Button
