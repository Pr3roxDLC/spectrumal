import React from 'react'
import { View } from 'react-native'
import styles2 from './GiveClueStyles';
import HeaderBack from '../../components/header/HeaderBack';
import GiveClueField from './GiveClueField';
import Button from '../../components/button/Button';
import ReadOnlySelector from '../../components/selector/read-only/ReadOnlySelector';
import { useAppDispatch } from '../../store/hooks';
import { openTabOnTopAction, TabType } from '../../store/features/navigation/navigationSlice';



const GiveClue = () => {
  const dispatch = useAppDispatch()

  const handleReadyClick = () => {
    dispatch(openTabOnTopAction({ type: TabType.WAITING_FOR_OTHERS }))
  }

  return (
    <>
      <HeaderBack/>
      <View style={styles2.giveClueContainer}>
      <ReadOnlySelector x={10} y={40}></ReadOnlySelector>
      <GiveClueField />
      <Button style={{ width: "80%"}} label="Ready" onPress={handleReadyClick} />
      </View>
    </>
  )
}

export default GiveClue
