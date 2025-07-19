import React from 'react'
import { View } from 'react-native'
import Button from '../../Components/button/Button'
import HeaderBack from '../../Components/header/HeaderBack';
import styles from './StartLobbyStyles';
import GameCode from './GameCode';
import LobbyComponent from './LobbyComponent';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { startGameAction } from '../../store/features/game/gameSlice';



const Lobby = () => {
  const dispatch = useAppDispatch()
  const numberOfPlayers = useAppSelector(state => state.lobby.users.length)
   const moreThanThreePlayers = numberOfPlayers > 2


  const handleStartGameClick = () => {
    dispatch(startGameAction())
  }


  return (
    <>
      <HeaderBack />
      <View style={styles.lobbyContainer}>
        <GameCode />
        <LobbyComponent />
        <Button disabled={!moreThanThreePlayers} label="Start Game" onPress={handleStartGameClick} style={{ width: "80%" }}></Button>
      </View>
    </>

  )
}

export default Lobby
