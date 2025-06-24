import React from 'react';
import { View, StyleSheet } from 'react-native';

const SelectorBlip = () => (
    <View style={styles.circle} />
);

const styles = StyleSheet.create({
    circle: {
        width: 16,
        height: 16,
        borderRadius: 8,
        backgroundColor: '#000', // Change color as needed
    },
});

export default SelectorBlip;