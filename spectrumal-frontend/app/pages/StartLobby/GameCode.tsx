import React from 'react'
import { View, Text } from 'react-native'
import styles from './StartLobbyStyles'
import GlassContainer from '../../Components/glassContainer/GlassContainer'
import { useSelector } from 'react-redux'
import { State } from '../../store/store'

const GameCode = () => {
const lobbyCode = useSelector((state: State ) => state.lobby.lobbyCode);


  return (
    <View style={styles.gameCodeContainer}>
      <View style={styles.textContainer}>
        <Text style={styles.thisIsYourGameCode}>Your game code is...</Text>
      </View>
      <View style={styles.gameCodeBox}>
        <GlassContainer height={100} style={{minWidth: 250, flexDirection: "row"}}>
          <Text style={styles.gameCode}>{lobbyCode || 'Loading...'}</Text>
        </GlassContainer>
      </View>
    </View>
  )
}

export default GameCode
