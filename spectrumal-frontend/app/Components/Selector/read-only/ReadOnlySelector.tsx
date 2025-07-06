import React from 'react';
import { View } from 'react-native';
import SelectorBlip from '../SelectorBlip';
import GlassContainer from '../../glassContainer/GlassContainer';
import SelectorAxis from '../interactable/SelectorAxis';
import styles from './ReadOnlySelectorStyles';

type ReadOnlySelectorProps = {
    x: number;
    y: number;
};

const ReadOnlySelector: React.FC<ReadOnlySelectorProps> = ({ x, y }) => {

    return (
        <View style={{ width: 300, height: 300 }}>
            <SelectorAxis></SelectorAxis>
            <GlassContainer width={300} height={300}>
                <View style={styles.touchableView}>
                        <View
                            style={{
                                position: 'absolute',
                                left: (x*150) + 150 - 15,
                                top: (y*-150) + 150 - 15,
                                width: 30,
                                height: 30,
                                justifyContent: 'center',
                                alignItems: 'center',
                                pointerEvents: 'none',
                            }}
                        >
                            <SelectorBlip />
                        </View>
                </View>
            </GlassContainer>
        </View>
    );
};


export default ReadOnlySelector;
