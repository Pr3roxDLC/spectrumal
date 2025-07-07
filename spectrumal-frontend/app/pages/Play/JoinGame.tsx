import React, { useState } from 'react'
import { View, Text } from 'react-native'
import styles from './JoinGameStyles'
import Button from '../../Components/button/Button'
import CustomTextInput from '../../Components/customTextInput/CustomTextInput'
import { useAppDispatch } from '../../store/hooks'
import { joinLobbyAction } from '../../store/features/lobby/lobbySlice'
import { v4 as uuidv4 } from 'uuid';



const JoinGame = () => {
  const dispatch = useAppDispatch()
    const [name, setName] = useState("")
    const [code, setCode] = useState("")

    const handleUsernameInput = (text: string) => {
    setName(text)
  }

  const handleCodeInput = (text: string) => {
      setCode(text)
  }

  const handleJoinLobbyClick = () => {
    const id = uuidv4(); 
    dispatch(joinLobbyAction({playerId: id, name: name, code: code}))
  }


  return (
    <View style={styles.container}>
      <View style={styles.joinGameContainer}>
        <Text style={styles.codeAndName}>Game code</Text>
        <CustomTextInput value={code} onChange={handleCodeInput} placeholder='Enter your game code' />
        <Text style={styles.codeAndName}>Name</Text>
        <CustomTextInput value={name} onChange={handleUsernameInput} placeholder='Enter your name' />
        <Button
          label="Join Lobby"
          style={{ width: "100%" }}
          onPress={handleJoinLobbyClick}
        />
      </View>
    </View>
  )
}

export default JoinGame
