import React, { Dispatch, SetStateAction } from 'react'
import { View } from 'react-native'
import Button from '../Components/GlobalComponents/Button'
import HeaderBack from '../Components/GlobalComponents/HeaderBack';
import styles from '../Styles/StartLobbyStyles';
import GameCode from '../Components/StartLobbyComponents/GameCode';
import LobbyComponent from '../Components/StartLobbyComponents/LobbyComponent';
import { useAppDispatch } from '../store/hooks';
import { openTabOnTopAction, TabType } from '../store/navigationSlice';



const Lobby = () => {
  const dispatch = useAppDispatch()

  const handleStartGameClick = () => {
    dispatch(openTabOnTopAction({ type: TabType.GIVE_CLUE }))

  }

  return (
    <>
      <HeaderBack />
      <View style={styles.lobbyContainer}>
        <GameCode />
        <LobbyComponent />
        <Button label="Start Game" onPress={handleStartGameClick} style={{ width: "80%" }}></Button>
      </View>
    </>

  )
}

export default Lobby
