// ToggleButton.tsx
import React, { useState } from 'react';
import SwitchToggle from "react-native-switch-toggle";

interface ToggleButtonProps {
  initialValue?: boolean;
  onToggle?: (value: boolean) => void;
}

const ToggleButton: React.FC<ToggleButtonProps> = ({ initialValue = false, onToggle }) => {
  const [isEnabled, setIsEnabled] = useState(initialValue);

  const toggleSwitch = () => {
    const newValue = !isEnabled;
    setIsEnabled(newValue);
    onToggle?.(newValue);
  };

  return (

<SwitchToggle
  switchOn={isEnabled}
  onPress={toggleSwitch}
  circleColorOn="#1E3A8A"         
  circleColorOff="#ccc"            
  backgroundColorOn="#93C5FD"   
  backgroundColorOff="#e5e5e5"  
  containerStyle={{ width: 60, height: 30, borderRadius: 25, padding: 5 }}
  circleStyle={{ width: 20, height: 20, borderRadius: 10 }}
/>

  );
};


export default ToggleButton;
