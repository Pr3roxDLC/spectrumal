import React, { Dispatch, SetStateAction } from 'react'
import { View } from 'react-native'
import Button from '../Components/GlobalComponents/Button'
import HeaderBack from '../Components/GlobalComponents/HeaderBack';
import styles from '../Styles/StartLobbyStyles';
import GameCode from '../Components/StartLobbyComponents/GameCode';
import LobbyComponent from '../Components/StartLobbyComponents/LobbyComponent';
import GradientBackground from '../Components/GlobalComponents/GradientBackground';


export interface Props {
  setPage: Dispatch<SetStateAction<string>>;
  setPreviousPage: Dispatch<SetStateAction<string | null>>
}

const Lobby = (props: Props) => {
  return (
    <GradientBackground>
      <HeaderBack goToSettings={() => {props.setPage('Settings'); props.setPreviousPage("Start Lobby")}} onPress={() => props.setPage("Play")} />
      <View style={styles.lobbyContainer}>
        <GameCode />
        <LobbyComponent />
        <Button label="Start Game" onPress={() => props.setPage("Give Clue")} style={{ width: "90%" }}></Button>
      </View>
    </GradientBackground>

  )
}

export default Lobby
