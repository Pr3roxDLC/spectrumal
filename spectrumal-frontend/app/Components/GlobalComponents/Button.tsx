import React from 'react'
import { TouchableOpacity, Text, ViewStyle, DimensionValue, View } from 'react-native';
import styles from '../ComponentStyles/ButtonStyles';
import GlassContainer from './GlassContainer';

export interface Props {
    label: string;
    onPress: () => void;
    style?: ViewStyle;
    width?: DimensionValue
}

const Button = (props: Props) => {

    return (
        <View style={[props.style, styles.container]}>
            <GlassContainer height={"100%"}>
                <TouchableOpacity activeOpacity={0.8} onPress={() => props.onPress()}>
                <Text style={styles.buttonText}>{props.label}</Text>
                </TouchableOpacity>
            </GlassContainer>
        </View>
    )
}

export default Button
