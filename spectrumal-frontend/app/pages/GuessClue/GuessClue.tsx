import React from 'react'
import { View, Text } from 'react-native'
import InteractableSelector from '../../Components/Selector/interactable/InteractableSelector';
import styles from './GuessClueStyles';
import Button from '../../Components/button/Button';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import GlassContainer from '../../Components/glassContainer/GlassContainer';
import { submitPointAction } from '../../store/features/game/gameSlice';



const GuessClue = () => {
  const dispatch = useAppDispatch()
  const selectedPoint = useAppSelector(state => state.game.selectedPoint);
const isBlipPlaced = selectedPoint !== undefined;

  const handleSubmitClick = () => {
      dispatch(submitPointAction());
  }


  const showClue = useAppSelector(state => state.game.currentClue )

  return (
    <>
      <View style={styles.guessClueContainer}>
        <InteractableSelector></InteractableSelector>
        <View style={styles.textContainer}>
          <Text style={styles.text}>Guess the location of</Text>
          <GlassContainer style={{marginBottom: 50, minHeight: 80 }} width={270}>
          <Text style={styles.clue}>{showClue}</Text>
          </GlassContainer>
        </View>
        <Button disabled={!isBlipPlaced} style={{ width: "80%" }} label="Submit Answer" onPress={handleSubmitClick} >
        </Button>
      </View>
    </>
  )
}

export default GuessClue
