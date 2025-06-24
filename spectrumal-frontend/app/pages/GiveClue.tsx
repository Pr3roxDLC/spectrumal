import React, { Dispatch, SetStateAction } from 'react'
import { ImageBackground, View } from 'react-native'
import Slider from '../Components/GiveClueComponents/Slider';
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
    <ImageBackground style={styles.container} source={require('../../assets/background.jpg')} resizeMode='stretch'>
      <HeaderBack onPress={() => props.setPage("Start Lobby")} />
      <View style={styles.giveClueContainer}>
      <InteractableSelector />
      <GiveClueField />
      <Button style={{ width: "80%"}} label="Ready" onPress={() => props.setPage("Guess Clue")} />
      </View>
    </ImageBackground>
  )
}

export default GiveClue
