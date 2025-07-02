import React from 'react'
import { View } from 'react-native'
import HeaderBack from '../../components/header/HeaderBack'
import styles from './LeaderboardPageStyles'
import Leaderboard from './Leaderboard'
import ReadOnlySelector from '../../components/selector/read-only/ReadOnlySelector'
import ContinuingRound from './ContinuingRound'

const LeaderboardPage = () => {
  return (
    <>
      <HeaderBack></HeaderBack>
      <View style={styles.leaderboardContainer}>
        <ReadOnlySelector x={40} y={80}></ReadOnlySelector>
        <Leaderboard></Leaderboard>
        <ContinuingRound></ContinuingRound>
      </View>
    </>
  )
}

export default LeaderboardPage
