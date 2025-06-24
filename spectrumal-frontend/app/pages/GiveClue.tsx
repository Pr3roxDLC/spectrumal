import React, { Dispatch, SetStateAction } from 'react'
import { View } from 'react-native'
import Slider from '../Components/GiveClueComponents/Slider';
import styles from '../Styles/GiveClueStyles';
import HeaderBack from '../Components/GlobalComponents/HeaderBack';
import GiveClueField from '../Components/GiveClueComponents/GiveClueField';
import Button from '../Components/GlobalComponents/Button';


export interface Props{
  setPage: Dispatch<SetStateAction<string>>;
}

const GiveClue = (props: Props) => {
  return (
    <View style={styles.container}>
      <HeaderBack onPress={() => props.setPage("Start Lobby")} />
        <View style={styles.giveClueContainer}>
      <Slider />
      <GiveClueField />
      <Button style={{ width: "80%"}} label="Ready" onPress={() => props.setPage("Guess Clue")} />
      </View>
    </View>
  )
}

export default GiveClue
