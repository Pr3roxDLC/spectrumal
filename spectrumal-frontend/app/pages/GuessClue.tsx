import React from 'react'
import { View } from 'react-native'
import HeaderBack from '../Components/GlobalComponents/HeaderBack';
import InteractableSelector from '../Components/Selector/interactable/InteractableSelector';
import styles from '../Styles/GuessClueStyles';
import Button from '../Components/GlobalComponents/Button';
import { useAppDispatch } from '../store/hooks';
import { openTabOnTopAction, TabType } from '../store/navigationSlice';



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
        <Button style={{ width: "80%" }} label="Submit Answer" onPress={handleSubmitClick} ></Button>
      </View>
    </>
  )
}

export default GuessClue
