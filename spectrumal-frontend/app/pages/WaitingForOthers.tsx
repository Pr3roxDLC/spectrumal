import React from 'react'
import { View, Text } from 'react-native'
import HeaderBack from '../Components/GlobalComponents/HeaderBack'
import styles from '../Styles/WaitingForOthersStyles'
import { Spinner } from '@ui-kitten/components';

const WaitingForOthers = () => {
  return (
    <>
    <HeaderBack></HeaderBack>
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
