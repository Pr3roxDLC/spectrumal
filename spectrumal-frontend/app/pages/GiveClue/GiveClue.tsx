import React, {useState} from 'react'
import { View } from 'react-native'
import styles2 from './GiveClueStyles';
import HeaderBack from '../../components/header/HeaderBack';
import GiveClueField from './GiveClueField';
import Button from '../../components/button/Button';
import ReadOnlySelector from '../../components/selector/read-only/ReadOnlySelector';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { openTabOnTopAction, TabType } from '../../store/features/navigation/navigationSlice';
import { submitClueAction } from '../../store/features/game/gameSlice';



const GiveClue = () => {
  const dispatch = useAppDispatch()
  const [clueInput, setClueInput] = useState("")

  const handleReadyClick = () => {
    dispatch(submitClueAction(clueInput))
  }



  const target = useAppSelector(state => state.game.target)

  return (
    <>
      <HeaderBack/>
      <View style={styles2.giveClueContainer}>
      <ReadOnlySelector x={target.dim1 ?? 0} y={target.dim2 ?? 0}></ReadOnlySelector>
      <GiveClueField setClueInput={setClueInput}  />
      <Button style={{ width: "80%"}} label="Ready" onPress={handleReadyClick} />
      </View>
    </>
  )
}

export default GiveClue
