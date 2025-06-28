import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import { View, Text } from 'react-native'
import styles from '../../Styles/StartGameStyles'
import Button from '../GlobalComponents/Button'
import CustomTextInput from '../GlobalComponents/CustomTextInput';
import { useAppDispatch } from '../../store/hooks';
import { openTabOnTopAction, TabType } from '../../store/navigationSlice';
import { createNewLobbyAction } from '../../store/lobbySlice';


const StartGame = () => {
  const dispatch = useAppDispatch()
  const [name, setName] = useState("")

  const handleUsernameInput = (text: string) => {
    setName(text)
  }

  const handleStartGameClick = () => {
    const id = uuidv4(); 
    dispatch(createNewLobbyAction({ id , name }));
  }

  return (
    <View style={[styles.container]}>
      <View style={styles.startGameContainer}>
        <Text style={styles.codeAndName}>Name</Text>
         <CustomTextInput onChange={handleUsernameInput} value={name} placeholder='Enter your name' />
        <Button label="Start Lobby" style={{ width: "100%" }} onPress={handleStartGameClick} />
      </View>
    </View>
  )
}

export default StartGame