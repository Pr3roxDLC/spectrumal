import React, { Dispatch, SetStateAction } from 'react'
import { View, Text } from 'react-native'
import styles2 from '../Styles/GiveClueStyles';
import HeaderBack from '../Components/GlobalComponents/HeaderBack';
import GiveClueField from '../Components/GiveClueComponents/GiveClueField';
import Button from '../Components/GlobalComponents/Button';
import GradientBackground from '../Components/GlobalComponents/GradientBackground';
import GlassContainer from '../Components/GlobalComponents/GlassContainer';
import styles from '../Components/ComponentStyles/InteractableSelectorStyles';


export interface Props{
  setPage: Dispatch<SetStateAction<string>>;
  setPreviousPage: Dispatch<SetStateAction<string | null>>
}

const GiveClue = (props: Props) => {
  return (
    <GradientBackground>
      <HeaderBack goToSettings={() => {props.setPage('Settings'); props.setPreviousPage("Give Clue")}} onPress={() => props.setPage("Start Lobby")} />
      <View style={styles2.giveClueContainer}>
      <GlassContainer height={300} width={300}>
        <Text style={styles.leftXaxisText}>
                Left
            </Text>
            <Text style={styles.rightXaxisText}>
                Right
            </Text>
            <Text style={styles.topYaxisText}>Top</Text>
            <Text style={styles.bottomYaxisText}>Bottom</Text>

            <View style={styles.xAxisLine} />
            <View style={styles.yAxisLine} />
      </GlassContainer>
      <GiveClueField />
      <Button style={{ width: "80%"}} label="Ready" onPress={() => props.setPage("Guess Clue")} />
      </View>
    </GradientBackground>
  )
}

export default GiveClue
