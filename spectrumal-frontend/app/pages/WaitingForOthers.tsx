import React from 'react'
import { View, Text } from 'react-native'
import HeaderBack from '../Components/GlobalComponents/HeaderBack'
import styles from '../Styles/WaitingForOthersStyles'
import { Spinner } from '@ui-kitten/components';
import Button from '../Components/GlobalComponents/Button';
import { useAppDispatch } from '../store/hooks';
import { openTabOnTopAction, TabType } from '../store/navigationSlice';

const WaitingForOthers = () => {
const dispatch = useAppDispatch()

const handleTemporaryPress = () => {
   dispatch(openTabOnTopAction({ type: TabType.LEADERBOARD }))
}


  return (
    <>
    <HeaderBack></HeaderBack>
    <View style={styles.waitingForOthersContainer}>
     <Text style={styles.title}>Waiting for other users to answer...</Text>
     <View style={[{ transform: [{ scale: 3 }] }]}>
    <Spinner size="giant" />
    </View>
    <Button onPress={handleTemporaryPress} style={{width: "80%"}} label="temporary"></Button>
    </View>
    </>
  )
}

export default WaitingForOthers
