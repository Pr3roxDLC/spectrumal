import React from 'react';
import { View, StyleSheet } from 'react-native';
import SelectorBlip from '../SelectorBlip';
import GlassContainer from '../../GlobalComponents/GlassContainer';
import SelectorAxis from '../interactable/SelectorAxis';

type ReadOnlySelectorProps = {
    x: number;
    y: number;
};

const ReadOnlySelector: React.FC<ReadOnlySelectorProps> = ({ x, y }) => {
    const viewWidth = 300;
    const viewHeight = 300;

    const isValidPosition = x >= 0 && y >= 0 && x <= viewWidth && y <= viewHeight;

    return (
        <GlassContainer width={300} height={300}>
            <SelectorAxis></SelectorAxis>
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
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    touchableView: {
        width: 300,
        height: 300,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default ReadOnlySelector;
