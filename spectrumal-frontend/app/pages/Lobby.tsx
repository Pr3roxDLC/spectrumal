import React, { Dispatch, SetStateAction } from 'react'
import { View, Text } from 'react-native'
import Button from '../Components/GlobalComponents/Button'
import HeaderBack from '../Components/GlobalComponents/HeaderBack';
import styles from './Styles/LobbyStyles';


export interface Props{
  setPage: Dispatch<SetStateAction<string>>;
}

const Lobby = (props: Props) => {
  return (
    <View style={styles.container}>
      <HeaderBack onPress={() => props.setPage("Play")} />
      <Button label="Start" onPress={() => props.setPage("Give Clue")} style={{ width: "100%"}}></Button>
    </View>
  )
}

export default Lobby
