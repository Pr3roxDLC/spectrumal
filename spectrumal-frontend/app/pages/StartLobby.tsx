import React, { Dispatch, SetStateAction } from 'react'
import { View } from 'react-native'
import Button from '../Components/GlobalComponents/Button'
import HeaderBack from '../Components/GlobalComponents/HeaderBack';
import styles from '../Styles/StartLobbyStyles';
import GameCode from '../Components/ComponentStyles/GameCode';
import LobbyComponent from '../Components/StartLobbyComponents/LobbyComponent';


export interface Props {
  setPage: Dispatch<SetStateAction<string>>;
}

const Lobby = (props: Props) => {
  return (
    <View style={styles.container}>
      <HeaderBack onPress={() => props.setPage("Play")} />
      <View style={styles.lobbyContainer}>
        <GameCode />
        <LobbyComponent />
        <Button label="Start Game" onPress={() => props.setPage("Give Clue")} style={{ width: "90%" }}></Button>
      </View>
    </View>

  )
}

export default Lobby
