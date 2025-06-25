import React, { Dispatch, SetStateAction } from 'react'
import { View } from 'react-native'
import styles2 from '../Styles/GiveClueStyles';
import HeaderBack from '../Components/GlobalComponents/HeaderBack';
import GiveClueField from '../Components/GiveClueComponents/GiveClueField';
import Button from '../Components/GlobalComponents/Button';
import GradientBackground from '../Components/GlobalComponents/GradientBackground';
import ReadOnlySelector from '../Components/Selector/read-only/ReadOnlySelector';
import { useAppDispatch } from '../store/hooks';
import { openTabOnTopAction, TabType } from '../store/navigationSlice';



const GiveClue = () => {
  const dispatch = useAppDispatch()

  const handleReadyClick = () => {
    dispatch(openTabOnTopAction({ type: TabType.GUESS_CLUE }))
  }

  return (
    <GradientBackground>
      <HeaderBack goToSettings={() => {props.setPage('Settings'); props.setPreviousPage("Give Clue")}} onPress={() => props.setPage("Start Lobby")} />
      <View style={styles2.giveClueContainer}>
      <ReadOnlySelector x={10} y={40}></ReadOnlySelector>
      <GiveClueField />
      <Button style={{ width: "80%"}} label="Ready" onPress={handleReadyClick} />
      </View>
    </GradientBackground>
  )
}

export default GiveClue
