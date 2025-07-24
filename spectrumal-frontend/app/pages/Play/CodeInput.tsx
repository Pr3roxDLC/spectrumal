// CodeInput.tsx
import React, { useRef, useEffect } from 'react';
import { View, TextInput } from 'react-native';
import GlassContainer from '../../Components/glassContainer/GlassContainer';
import styles from './JoinGameStyles';

interface CodeInputProps {
  value: string;
  onChange: (code: string) => void;
}

const CodeInput = ({ value, onChange }: CodeInputProps) => {
  const code = value.toUpperCase().split('').slice(0, 6); 
  const inputs = useRef<Array<TextInput | null>>([]);

  useEffect(() => {
    if (value.length === 6) {
      inputs.current[5]?.blur(); 
    }
  }, [value]);

  const handleChange = (text: string, index: number) => {
    const chars = text.toUpperCase().split('');
    let newCode = value.split('');

    if (chars.length === 1) {
      newCode[index] = chars[0];
      const updated = newCode.join('');
      onChange(updated);

      if (index < 5 && chars[0]) {
        inputs.current[index + 1]?.focus();
      }
    } else if (chars.length === 6) {
      const fullCode = chars.slice(0, 6).join('');
      onChange(fullCode);
      chars.slice(0, 6).forEach((char, i) => {
        if (inputs.current[i]) {
          inputs.current[i]?.setNativeProps({ text: char });
        }
      });
    }
  };

  const handleKeyPress = (e: any, index: number) => {
    if (e.nativeEvent.key === 'Backspace') {
      let newCode = value.split('');

      if (newCode[index]) {
        newCode[index] = '';
        onChange(newCode.join(''));
      } else if (index > 0) {
        inputs.current[index - 1]?.focus();
        newCode[index - 1] = '';
        onChange(newCode.join(''));
      }
    }
  };

  return (
    <View style={styles.codeInputContainer}>
      {Array.from({ length: 6 }).map((_, index) => (
        <GlassContainer
          key={index}
          style={styles.glass}
          width="15%"
          height="75%"
        >
          <TextInput
            ref={(ref) => (inputs.current[index] = ref)}
            style={styles.input}
            value={code[index] || ''}
            onChangeText={(text) => handleChange(text, index)}
            onKeyPress={(e) => handleKeyPress(e, index)}
            keyboardType="default"
            maxLength={1}
            autoCapitalize="characters"
            autoFocus={index === 0}
          />
        </GlassContainer>
      ))}
    </View>
  );
};



export default CodeInput;

