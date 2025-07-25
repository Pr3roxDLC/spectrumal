import React, { useState } from 'react'
import { View, Text } from 'react-native'
import styles from './JoinGameStyles'
import Button from '../../Components/button/Button'
import CustomTextInput from '../../Components/customTextInput/CustomTextInput'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { joinLobbyAction } from '../../store/features/lobby/lobbySlice'
import { v4 as uuidv4 } from 'uuid';
import LobbyIsFull from '../LobbyIsFull/LobbyIsFull'



const JoinGame = () => {
  const dispatch = useAppDispatch()
  const invalidCode = useAppSelector(state => state.lobby.codeError)
  const numberOfUsers = useAppSelector(state => state.lobby.users.length);
  const MAX_USERS = 8




    const [name, setName] = useState("")
    const [code, setCode] = useState("")
    const [nameError, setNameError] = useState("")
    const [codeError, setCodeError] = useState("")
      const [showLeaveModal, setShowLeaveModal] = useState(false)

    const handleUsernameInput = (text: string) => {
    setName(text)
      if (text.trim()) {
      setNameError(""); 
    }
  }

  const handleCodeInput = (text: string) => {
      setCode(text.toUpperCase())

      if (text.trim()) {
      setCodeError(""); 
    }
  }

  const handleJoinLobbyClick = () => {
  let hasError = false;

  if (name.trim() === "") {
    setNameError("Name is required");
    hasError = true;
  } else {
    setNameError("");
  }

  if (code.trim() === "") {
    setCodeError("Code is required");
    hasError = true;
  } else {
    setCodeError("");
  }

    if (numberOfUsers >= MAX_USERS) {
     setShowLeaveModal(true); 
  return;
  }

  if (hasError) return;
    const id = uuidv4(); 
    dispatch(joinLobbyAction({playerId: id, name: name, code: code}))
  }


  return (
    <>
    <View style={styles.container}>
      <View style={styles.joinGameContainer}>
        <Text style={styles.codeAndName}>Game code</Text>
        <CustomTextInput maxLength={6} value={code} onChange={handleCodeInput} placeholder='Enter your game code' />
         {codeError ? <Text style={styles.errorText}>{codeError}</Text> : null}
         {invalidCode ? <Text style={styles.errorText}>{invalidCode}</Text> : null}

        <Text style={styles.codeAndName}>Name</Text>
        <CustomTextInput maxLength={20} value={name} onChange={handleUsernameInput} placeholder='Enter your name' />
         {nameError ? <Text style={styles.errorText}>{nameError}</Text> : null}
        <Button
          label="Join Lobby"
          style={{ width: "100%" }}
          onPress={handleJoinLobbyClick}
        />
      </View>
    </View>
    <LobbyIsFull modalVisible={showLeaveModal} setModalVisible={setShowLeaveModal} />
    </>
  )
}

export default JoinGame
