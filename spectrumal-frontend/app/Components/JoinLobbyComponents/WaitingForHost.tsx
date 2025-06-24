import React from 'react'
import { View, Text } from 'react-native'
import styles from '../../Styles/JoinLobbyStyles'
import { Spinner } from '@ui-kitten/components';


const WaitingForHost = () => {
  return (
    <View style={styles.waitingForHostContainer}>
      <Text style={styles.waitingForHostText}>Waiting for your host to start the game</Text>
      <Spinner size="giant" style={styles.loading} />
    </View>
  )
}

export default WaitingForHost
