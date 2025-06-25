import React, { Dispatch, SetStateAction } from 'react'
import { View, Text } from 'react-native'
import styles from '../../Styles/JoinGameStyles'
import Button from '../GlobalComponents/Button'
import CustomTextInput from '../GlobalComponents/CustomTextInput'
import { useAppDispatch } from '../../store/hooks'
import { openTabOnTopAction, TabType } from '../../store/navigationSlice'



const JoinGame = () => {
  const dispatch = useAppDispatch()

  const handleJoinLobbyClick = () => {
    dispatch(openTabOnTopAction({ type: TabType.JOIN_LOBBY }))
  }


  return (
    <View style={styles.container}>
      <View style={styles.joinGameContainer}>
        <Text style={styles.codeAndName}>Game code</Text>
        <CustomTextInput placeholder='Enter your game code' />
        <Text style={styles.codeAndName}>Name</Text>
        <CustomTextInput placeholder='Enter your name' />
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
