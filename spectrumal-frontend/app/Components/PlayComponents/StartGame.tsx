import React from 'react'
import { View, Text } from 'react-native'
import styles from '../../Styles/StartGameStyles'
import Button from '../GlobalComponents/Button'
import CustomTextInput from '../GlobalComponents/CustomTextInput';
import { useAppDispatch } from '../../store/hooks';
import { openTabOnTopAction, TabType } from '../../store/navigationSlice';


const StartGame = () => {
  const dispatch = useAppDispatch()

  const handleStartGameClick = () => {
    dispatch(openTabOnTopAction({ type: TabType.START_LOBBY }))
  }

  return (
    <View style={[styles.container]}>
      <View style={styles.startGameContainer}>
        <Text style={styles.codeAndName}>Name</Text>
         <CustomTextInput placeholder='Enter your name' />
        <Button label="Start Game" style={{ width: "100%" }} onPress={handleStartGameClick} />
      </View>
    </View>
  )
}

export default StartGame