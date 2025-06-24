import React, { Dispatch, SetStateAction } from 'react'
import { View } from 'react-native'
import styles from '../Styles/GiveClueStyles';
import HeaderBack from '../Components/GlobalComponents/HeaderBack';
import GiveClueField from '../Components/GiveClueComponents/GiveClueField';
import Button from '../Components/GlobalComponents/Button';
import InteractableSelector from '../Components/Selector/interactable/InteractableSelector';
import GradientBackground from '../Components/GlobalComponents/GradientBackground';


export interface Props{
  setPage: Dispatch<SetStateAction<string>>;
}

const GiveClue = (props: Props) => {
  return (
    <GradientBackground>
      <HeaderBack onPress={() => props.setPage("Start Lobby")} />
      <View style={styles.giveClueContainer}>
      <InteractableSelector />
      <GiveClueField />
      <Button style={{ width: "80%"}} label="Ready" onPress={() => props.setPage("Guess Clue")} />
      </View>
    </GradientBackground>
  )
}

export default GiveClue
