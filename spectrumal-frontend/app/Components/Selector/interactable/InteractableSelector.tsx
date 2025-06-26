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

    // Clamp position to respect 25px rounded corners
    const clampToRoundedRect = (x: number, y: number, width: number, height: number, radius: number) => {
        // Clamp to rectangle first
        let cx = clamp(x, 0, width);
        let cy = clamp(y, 0, height);

        // Check each corner
        const corners = [
            { cx: radius, cy: radius }, // top-left
            { cx: width - radius, cy: radius }, // top-right
            { cx: radius, cy: height - radius }, // bottom-left
            { cx: width - radius, cy: height - radius }, // bottom-right
        ];

        for (const corner of corners) {
            const dx = cx - corner.cx;
            const dy = cy - corner.cy;
            if (
                (corner.cx === radius && cx < radius && corner.cy === radius && cy < radius) || // top-left
                (corner.cx === width - radius && cx > width - radius && corner.cy === radius && cy < radius) || // top-right
                (corner.cx === radius && cx < radius && corner.cy === height - radius && cy > height - radius) || // bottom-left
                (corner.cx === width - radius && cx > width - radius && corner.cy === height - radius && cy > height - radius) // bottom-right
            ) {
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist > radius) {
                    // Clamp to the edge of the circle
                    const angle = Math.atan2(dy, dx);
                    cx = corner.cx + Math.cos(angle) * radius;
                    cy = corner.cy + Math.sin(angle) * radius;
                }
                break;
            }
        }
        return { x: cx, y: cy };
    };

    const RADIUS = 25;

    const handleMove = (event: GestureResponderEvent) => {
        const { pageX, pageY } = event.nativeEvent;
        let x = pageX - layout.px;
        let y = pageY - layout.py;
        ({ x, y } = clampToRoundedRect(x, y, viewWidth, viewHeight, RADIUS));
        setPosition({ x, y });
    };

    const hasMoved = position.x !== -1 && position.y !== -1;

    const handlePress = (event: GestureResponderEvent) => {
        const { pageX, pageY } = event.nativeEvent;
        let x = pageX - layout.px;
        let y = pageY - layout.py;
        ({ x, y } = clampToRoundedRect(x, y, viewWidth, viewHeight, RADIUS));
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
        <View style={{ width: 300, height: 300}}>
            <SelectorAxis></SelectorAxis>
        <GlassContainer width={300} height={300}>
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
        </View>
    );
};


export default InteractableSelector;
