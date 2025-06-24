import React, { useEffect, useRef, useState } from 'react';
import { View, StyleSheet, GestureResponderEvent } from 'react-native';
import SelectorBlip from '../SelectorBlip';
import { BlurView } from 'expo-blur';
import variables from '../../../Styles/Variables';

type SelectorProps = {

};

const InteractableSelector: React.FC<SelectorProps> = () => {
    const viewRef = useRef<View>(null);
    const [layout, setLayout] = useState({ px: 0, py: 0 });
    const [position, setPosition] = useState({ x: -1, y: -1 });

    // Measure the view's position on mount
    useEffect(() => {
        setTimeout(() => {
            viewRef.current?.measure((_fx, _fy, _width, _height, px, py) => {
                setLayout({ px, py });
            });
        }, 0); // Wait for layout
    }, []);

    const viewWidth = 300;
    const viewHeight = 300;

    const clamp = (value: number, min: number, max: number) => Math.max(min, Math.min(value, max));

    const handleMove = (event: GestureResponderEvent) => {
        const { pageX, pageY } = event.nativeEvent;
        let x = pageX - layout.px;
        let y = pageY - layout.py;
        x = clamp(x, 0, viewWidth);
        y = clamp(y, 0, viewHeight);
        setPosition({ x, y });
    };

    const hasMoved = position.x !== -1 && position.y !== -1;

    const handlePress = (event: GestureResponderEvent) => {
        const { pageX, pageY } = event.nativeEvent;
        let x = pageX - layout.px;
        let y = pageY - layout.py;
        x = clamp(x, 0, viewWidth);
        y = clamp(y, 0, viewHeight);
        setPosition({ x, y });
    };

    // Call onPositionUpdate when user stops dragging or tapping
    const handleRelease = () => {
        if (hasMoved && onPositionUpdate) {
            onPositionUpdate(position);
        }
    };

    function onPositionUpdate(position: { x: number; y: number; }) {
        console.log('Position updated:', position);
    }


    return (
        <BlurView style={styles.container}>
            <View
                ref={viewRef}
                style={styles.touchableView}
                onStartShouldSetResponder={() => true}
                onMoveShouldSetResponder={() => true}
                onResponderMove={handleMove}
                onResponderGrant={handlePress}
                onResponderRelease={handleRelease}
            >
                {hasMoved && (
                    <View
                        style={{
                            position: 'absolute',
                            left: position.x - 15,
                            top: position.y - 15,
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
        </BlurView>
    );
};

const styles = StyleSheet.create<StyleSheet.NamedStyles<any>>({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: variables.colors.buttonBorderRadius,
        borderColor: 'rgba(255, 255, 255, 0.2)',
        borderWidth: 1,
        shadowColor: 'rgba(0, 0, 0, 0.3)',
        shadowOffset: { width: 8, height: 8 },
        shadowOpacity: 0.5,
        shadowRadius: 5,
    },
    touchableView: {
        width: 300,
        height: 300,
        backgroundColor: '#00000000', // Transparent background
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default InteractableSelector;
