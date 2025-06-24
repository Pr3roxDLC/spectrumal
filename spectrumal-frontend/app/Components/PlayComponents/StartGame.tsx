import React, { Dispatch, SetStateAction } from 'react'
import { View, Text, TextInput } from 'react-native'
import styles from '../../Styles/StartGameStyles'
import Button from '../GlobalComponents/Button'


export interface Props{
  setPage: Dispatch<SetStateAction<string>>;
}


const StartGame = (props: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.startGameContainer}>
        <Text style={styles.codeAndName}>Name</Text>
        <TextInput style={styles.textInput}></TextInput>
        <Button label="Start Game" style={{ width: "100%" }} onPress={() => props.setPage("Start Lobby")} />
      </View>
    </View>
  )
}

export default StartGame