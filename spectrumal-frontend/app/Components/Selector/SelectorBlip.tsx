import React from 'react';
import { View, StyleSheet } from 'react-native';
import variables from '../../Styles/Variables';

const SelectorBlip = () => (
    <View style={styles.circle} />
);

const styles = StyleSheet.create({
    circle: {
        width: 24,
        height: 24,
        borderRadius: 12,
        backgroundColor: variables.colors.whiteText, 
        borderWidth: 2,
        borderColor: '#fff',
        boxShadow: variables.colors.whiteText + ' 0px 0px 8px 0px',
    },
});

export default SelectorBlip;