import React, { Dispatch, SetStateAction } from 'react'
import { View } from 'react-native'
import GradientBackground from '../Components/GlobalComponents/GradientBackground';
import HeaderBack from '../Components/GlobalComponents/HeaderBack';
import InteractableSelector from '../Components/Selector/interactable/InteractableSelector';
import styles from '../Styles/GuessClueStyles';
import Button from '../Components/GlobalComponents/Button';



const GuessClue = () => {
  return (
    <>
      <HeaderBack goToSettings={() => { props.setPage('Settings'); props.setPreviousPage("Guess Clue") }} onPress={() => props.setPage("Give Clue")}></HeaderBack>
      <View style={styles.guessClueContainer}>
        <InteractableSelector></InteractableSelector>
        <Button style={{ width: "80%" }} label="Submit Answer" onPress={function (): void {
          throw new Error('Function not implemented.');
        }} ></Button>
      </View>
    </>
  )
}

export default GuessClue
