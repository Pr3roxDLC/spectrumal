import React, { useState } from 'react'
import { View, Text } from 'react-native'
import styles from '../SettingsPage/SettingsStyles';
import HeaderBack from '../../Components/header/HeaderBack';
import GlassContainer from '../../Components/glassContainer/GlassContainer';
import Slider from '@react-native-community/slider';
import variables from '../../../assets/variables/Variables';



const GameSettingsPage = () => {
  const [rounds, setRounds] = useState(5);
  return (
    <>
      <HeaderBack></HeaderBack>
      <View style={styles.settingsContainer}>
        <GlassContainer width="90%" height={55}>
          <View style={styles.settingsOptionContainer}>
            <Text style={styles.settingsOptionText}>Number of Rounds: {rounds}</Text>
            <Slider
              style={{ width: '30%', height: 40 }}
              minimumValue={1}
              maximumValue={8}
              step={1}
              minimumTrackTintColor={variables.colors.whiteText}
              maximumTrackTintColor="#ccc"
              thumbTintColor={variables.colors.whiteText}
              value={rounds}
              onValueChange={(value) => setRounds(value)}
            />
          </View>
        </GlassContainer>
      </View>
    </>
  )
}

export default GameSettingsPage