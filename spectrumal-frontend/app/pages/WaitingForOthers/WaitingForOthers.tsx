import React from 'react'
import { View, Text } from 'react-native'
import styles from './WaitingForOthersStyles'
import { Spinner } from '@ui-kitten/components'

const WaitingForOthers = () => {

  return (
    <>
      <View style={styles.waitingForOthersContainer}>
        <Text style={styles.title}>Waiting for other users to answer...</Text>
        <View style={[{ transform: [{ scale: 3 }] }]}>
          <Spinner size="giant" />
        </View>
      </View>
    </>
  )
}

export default WaitingForOthers

