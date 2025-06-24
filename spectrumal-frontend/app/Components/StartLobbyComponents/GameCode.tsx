import React from 'react'
import { View, Text } from 'react-native'
import styles from '../../Styles/StartLobbyStyles'

const GameCode = () => {
  return (
    <View style={styles.gameCodeContainer}>
        <View style={styles.textContainer}>
      <Text style={styles.thisIsYourGameCode}>This is your game code</Text>
      </View>
      <View style={styles.gameCodeBox}>
        <Text style={styles.gameCode}>123456</Text>
      </View>
    </View>
  )
}

export default GameCode
