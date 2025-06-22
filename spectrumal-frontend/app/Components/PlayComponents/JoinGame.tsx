import React, { Dispatch, SetStateAction } from 'react'
import { View, Text, TextInput } from 'react-native'
import styles from '../../pages/Styles/JoinGameStyles'
import Button from '../GlobalComponents/Button'


export interface Props{
  setPage: Dispatch<SetStateAction<string>>;
}


const JoinGame = (props: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.joinGameContainer}>
        <Text style={styles.codeAndName}>Game code</Text>
        <TextInput style={styles.textInput}></TextInput>
        <Text style={styles.codeAndName}>Name</Text>
        <TextInput style={styles.textInput}></TextInput>
        <Button label="Join Game" style={{ width: "100%" }} onPress={() => props.setPage("Lobby")} />
      </View>
    </View>
  )
}

export default JoinGame
