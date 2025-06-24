import React from 'react'
import { View, Text } from 'react-native'
import styles from '../../Styles/StartLobbyStyles'
import GlassContainer from '../GlobalComponents/GlassContainer'

const GameCode = () => {
  return (
    <View style={styles.gameCodeContainer}>
      <View style={styles.textContainer}>
        <Text style={styles.thisIsYourGameCode}>This is your game code</Text>
      </View>
      <View style={styles.gameCodeBox}>
        <GlassContainer height={100} width={250}>
          <Text style={styles.gameCode}>123456</Text>
        </GlassContainer>
      </View>
    </View>
  )
}

export default GameCode
