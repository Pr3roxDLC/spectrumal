import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import { View, Text } from 'react-native'
import styles from './StartGameStyles'
import Button from '../../Components/button/Button'
import CustomTextInput from '../../Components/customTextInput/CustomTextInput';
import { useAppDispatch } from '../../store/hooks';
import { createNewLobbyAction } from '../../store/features/lobby/lobbySlice';


const StartGame = () => {
  const dispatch = useAppDispatch()
  const [name, setName] = useState("")
  const handleUsernameInput = (text: string) => {
    setName(text)
  }

  const handleStartGameClick = () => {
    const id = uuidv4(); 
    dispatch(createNewLobbyAction({ playerId: id , name: name }));
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