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
    const viewWidth = 300;
    const viewHeight = 300;

    const isValidPosition = x >= 0 && y >= 0 && x <= viewWidth && y <= viewHeight;

    return (
        <View style={{ width: 300, height: 300 }}>
            <SelectorAxis></SelectorAxis>
            <GlassContainer width={300} height={300}>
                <View style={styles.touchableView}>
                    {isValidPosition && (
                        <View
                            style={{
                                position: 'absolute',
                                left: x - 15,
                                top: y - 15,
                                width: 30,
                                height: 30,
                                justifyContent: 'center',
                                alignItems: 'center',
                                pointerEvents: 'none',
                            }}
                        >
                            <SelectorBlip />
                        </View>
                    )}
                </View>
            </GlassContainer>
        </View>
    );
};


export default ReadOnlySelector;
