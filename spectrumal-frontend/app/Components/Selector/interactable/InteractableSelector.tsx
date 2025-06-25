import React, { useEffect, useRef, useState } from 'react';
import { View, GestureResponderEvent, Text } from 'react-native';
import SelectorBlip from '../SelectorBlip';
import GlassContainer from '../../GlobalComponents/GlassContainer';
import styles from '../../ComponentStyles/InteractableSelectorStyles';
import SelectorAxis from './SelectorAxis';

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
        <GlassContainer width={300} height={300}>
            <SelectorAxis></SelectorAxis>
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
        </GlassContainer>
    );
};


export default InteractableSelector;
