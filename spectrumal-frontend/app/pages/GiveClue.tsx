import React, { Dispatch, SetStateAction } from 'react'
import { View, Text } from 'react-native'
import styles2 from '../Styles/GiveClueStyles';
import HeaderBack from '../Components/GlobalComponents/HeaderBack';
import GiveClueField from '../Components/GiveClueComponents/GiveClueField';
import Button from '../Components/GlobalComponents/Button';
import GradientBackground from '../Components/GlobalComponents/GradientBackground';
import GlassContainer from '../Components/GlobalComponents/GlassContainer';
import styles from '../Components/ComponentStyles/InteractableSelectorStyles';
import ReadOnlySelector from '../Components/Selector/read-only/ReadOnlySelector';


export interface Props{
  setPage: Dispatch<SetStateAction<string>>;
  setPreviousPage: Dispatch<SetStateAction<string | null>>
}

const GiveClue = (props: Props) => {
  return (
    <GradientBackground>
      <HeaderBack goToSettings={() => {props.setPage('Settings'); props.setPreviousPage("Give Clue")}} onPress={() => props.setPage("Start Lobby")} />
      <View style={styles2.giveClueContainer}>
      <ReadOnlySelector x={10} y={40}></ReadOnlySelector>
      <GiveClueField />
      <Button style={{ width: "80%"}} label="Ready" onPress={() => props.setPage("Guess Clue")} />
      </View>
    </GradientBackground>
  )
}

export default GiveClue
