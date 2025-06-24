import React, { useEffect, useRef, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, GestureResponderEvent } from 'react-native';

type SelectorProps = {

};

const Selector: React.FC<SelectorProps> = ({  }) => {
 const viewRef = useRef<View>(null);
  const [layout, setLayout] = useState({ px: 0, py: 0 });
  const [position, setPosition] = useState({ x: 0, y: 0 });

  // Measure the view's position on mount
  useEffect(() => {
    setTimeout(() => {
      viewRef.current?.measure((fx, fy, width, height, px, py) => {
        setLayout({ px, py });
      });
    }, 0); // Wait for layout
  }, []);

  const handleMove = (event: GestureResponderEvent) => {
    const { pageX, pageY } = event.nativeEvent;
    const x = pageX - layout.px;
    const y = pageY - layout.py;
    setPosition({ x, y });
  };

  return (
    <View style={styles.container}>
      <View
        ref={viewRef}
        style={styles.touchableView}
        onStartShouldSetResponder={() => true}
        onMoveShouldSetResponder={() => true}
        onResponderMove={handleMove}
      >
        <Text>Drag inside this view</Text>
        <Text>X: {position.x.toFixed(1)}</Text>
        <Text>Y: {position.y.toFixed(1)}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  touchableView: {
    width: 300,
    height: 300,
    backgroundColor: '#e0e0e0',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default Selector;