import React from 'react'
import { TouchableOpacity, Text, ViewStyle } from 'react-native';
import styles from '../ComponentStyles/ButtonStyles';
import { LinearGradient } from 'expo-linear-gradient';
import { BlurView } from 'expo-blur';

export interface Props {
    label: string;
    onPress: () => void;
    style: ViewStyle
}

const Button = (props: Props) => {

    return (
        <TouchableOpacity activeOpacity={0.8} style={[props.style, styles.buttonWrapper]} onPress={() => props.onPress()}>  <BlurView
            blurType="dark"
            blurAmount={20}
            reducedTransparencyFallbackColor="rgba(30, 50, 90, 0.3)"
            style={styles.blurView}
        >
            <Text style={styles.buttonText}>{props.label}</Text>
        </BlurView>
        </TouchableOpacity>
    )
}

export default Button
