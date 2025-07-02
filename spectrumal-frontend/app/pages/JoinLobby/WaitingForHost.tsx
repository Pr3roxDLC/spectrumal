import React from 'react'
import { View, Text } from 'react-native'
import styles from './JoinLobbyStyles'
import { Spinner } from '@ui-kitten/components';


const WaitingForHost = () => {
  return (
    <View style={styles.waitingForHostContainer}>
      <Text style={styles.waitingForHostText}>Waiting for your host to start the game</Text>
      <View style={[{ transform: [{ scale: 3 }] }]}>
      <Spinner size="giant" />
      </View>
    </View>
  )
}

export default WaitingForHost
