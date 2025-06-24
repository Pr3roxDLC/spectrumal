import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Selector from '../Components/Selector/Selector';
type SelectorDemoPageProps = {
  setPage: React.Dispatch<React.SetStateAction<string>>;
};

const SelectorDemoPage: React.FC<SelectorDemoPageProps> = ({ setPage }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Selector Demo Page</Text>
            {/* Add your selector demo components here */}
            <Selector/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
    },
});

export default SelectorDemoPage;