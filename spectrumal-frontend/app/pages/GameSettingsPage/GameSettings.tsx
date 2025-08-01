import React, { useState } from 'react'
import { View, Text } from 'react-native'
import styles from '../SettingsPage/SettingsStyles';
import HeaderBack from '../../Components/header/HeaderBack';
import GlassContainer from '../../Components/glassContainer/GlassContainer';
import Slider from '@react-native-community/slider';
import variables from '../../../assets/variables/Variables';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { setNumberOfRoundsAction } from '../../store/features/game/gameSlice';



const GameSettingsPage = () => {
   const dispatch = useAppDispatch();
  const numberOfRounds = useAppSelector(state => state.game.numberOfRounds);
  return (
    <>
      <HeaderBack />
      <View style={styles.settingsContainer}>
        <GlassContainer width="90%" height={55}>
          <View style={styles.settingsOptionContainer}>
            <Text style={styles.settingsOptionText}>Number of Rounds: {numberOfRounds}</Text>
            <Slider
              style={{ width: '30%', height: 40 }}
              minimumValue={1}
              maximumValue={8}
              step={1}
              minimumTrackTintColor={variables.colors.whiteText}
              maximumTrackTintColor="#ccc"
              thumbTintColor={variables.colors.whiteText}
              value={numberOfRounds}
              onValueChange={(value) => dispatch(setNumberOfRoundsAction(value))}
            />
          </View>
        </GlassContainer>
      </View>
    </>
  );
}

export default GameSettingsPage