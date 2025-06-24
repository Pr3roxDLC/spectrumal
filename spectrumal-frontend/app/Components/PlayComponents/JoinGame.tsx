import React, { Dispatch, SetStateAction } from 'react'
import { View, Text } from 'react-native'
import styles from '../../Styles/JoinGameStyles'
import Button from '../GlobalComponents/Button'
import CustomTextInput from '../GlobalComponents/CustomTextInput'


export interface Props{
  setPage: Dispatch<SetStateAction<string>>;
}


const JoinGame = (props: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.joinGameContainer}>
        <Text style={styles.codeAndName}>Game code</Text>
        <CustomTextInput placeholder='Enter your game code' />
        <Text style={styles.codeAndName}>Name</Text>
        <CustomTextInput placeholder='Enter your name' />
        <Button label="Join Game" style={{ width: "100%" }} onPress={() => props.setPage("Join Lobby")} />
      </View>
    </View>
  )
}

export default JoinGame
