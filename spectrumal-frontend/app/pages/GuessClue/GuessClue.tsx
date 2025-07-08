import React from 'react'
import { View, Text } from 'react-native'
import HeaderBack from '../../Components/header/HeaderBack';
import InteractableSelector from '../../Components/Selector/interactable/InteractableSelector';
import styles from './GuessClueStyles';
import Button from '../../Components/button/Button';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import GlassContainer from '../../Components/glassContainer/GlassContainer';
import { submitPointAction } from '../../store/features/game/gameSlice';



const GuessClue = () => {
  const dispatch = useAppDispatch()

  const handleSubmitClick = () => {
      dispatch(submitPointAction());
  }


  const showClue = useAppSelector(state => state.game.currentClue )

  return (
    <>
      <HeaderBack></HeaderBack>
      <View style={styles.guessClueContainer}>
        <InteractableSelector></InteractableSelector>
        <View style={styles.textContainer}>
          <Text style={styles.text}>Guess the location of</Text>
          <GlassContainer style={{marginBottom: 50}} width={270} height={80}>
          <Text style={styles.clue}>{showClue}</Text>
          </GlassContainer>
        </View>
        <Button style={{ width: "80%" }} label="Submit Answer" onPress={handleSubmitClick} >
        </Button>
      </View>
    </>
  )
}

export default GuessClue
