import React from 'react'
import { View, Text } from 'react-native'
import HeaderBack from '../Components/GlobalComponents/HeaderBack';
import InteractableSelector from '../Components/Selector/interactable/InteractableSelector';
import styles from '../Styles/GuessClueStyles';
import Button from '../Components/GlobalComponents/Button';
import { useAppDispatch } from '../store/hooks';
import { openTabOnTopAction, TabType } from '../store/navigationSlice';
import GlassContainer from '../Components/GlobalComponents/GlassContainer';



const GuessClue = () => {
  const dispatch = useAppDispatch()

  const handleSubmitClick = () => {
    dispatch(openTabOnTopAction({ type: TabType.WAITING_FOR_OTHERS }))
  }

  return (
    <>
      <HeaderBack></HeaderBack>
      <View style={styles.guessClueContainer}>
        <InteractableSelector></InteractableSelector>
        <View style={styles.textContainer}>
          <Text style={styles.text}>Guess the location of</Text>
          <GlassContainer style={{marginBottom: 50}} width={270} height={80}>
          <Text style={styles.clue}>Stealing groceries</Text>
          </GlassContainer>
        </View>
        <Button style={{ width: "80%" }} label="Submit Answer" onPress={handleSubmitClick} >
        </Button>
      </View>
    </>
  )
}

export default GuessClue
