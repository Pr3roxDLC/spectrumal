import React from 'react'
import { View, Text } from 'react-native'
import HeaderBack from '../../Components/header/HeaderBack'
import styles from './WaitingForOthersStyles'
import { Spinner } from '@ui-kitten/components'
import Button from '../../Components/button/Button'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { openTabOnTopAction, TabType } from '../../store/features/navigation/navigationSlice'

const WaitingForOthers = () => {
  const dispatch = useAppDispatch()
  const tabStack = useAppSelector((state) => state.navigation.tabStack)

  const handleTemporaryPress = () => {
    const previousTab = tabStack[tabStack.length - 2]?.type

    if (previousTab === TabType.GIVE_CLUE) {
      dispatch(openTabOnTopAction({ type: TabType.GUESS_CLUE }))
    } else if (previousTab === TabType.GUESS_CLUE) {
      dispatch(openTabOnTopAction({ type: TabType.LEADERBOARD }))
    } else {
      console.warn('Unexpected previous tab:', previousTab)
    }
  }

  return (
    <>
      <HeaderBack />
      <View style={styles.waitingForOthersContainer}>
        <Text style={styles.title}>Waiting for other users to answer...</Text>
        <View style={[{ transform: [{ scale: 3 }] }]}>
          <Spinner size="giant" />
        </View>
        <Button onPress={handleTemporaryPress} style={{ width: '80%' }} label="temporary" />
      </View>
    </>
  )
}

export default WaitingForOthers

