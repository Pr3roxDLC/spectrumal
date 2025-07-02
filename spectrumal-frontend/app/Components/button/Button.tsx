import React from 'react'
import { TouchableOpacity, Text, ViewStyle, DimensionValue, View } from 'react-native';
import GlassContainer from '../glassContainer/GlassContainer';
import styles from './ButtonStyles';


export interface Props {
    label: string;
    onPress: () => void;
    style?: ViewStyle;
    width?: DimensionValue
}

const Button = (props: Props) => {

    return (
        <View style={[props.style, styles.container]}>
            <TouchableOpacity style={{height: "100%"}} activeOpacity={0.8} onPress={() => props.onPress()}>
            <GlassContainer height={"100%"}>
                <Text style={styles.buttonText}>{props.label}</Text>
            </GlassContainer>
            </TouchableOpacity>
        </View>
    )
}

export default Button
