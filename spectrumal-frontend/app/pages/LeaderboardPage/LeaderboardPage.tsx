import React from 'react'
import { View } from 'react-native'
import HeaderBack from '../../Components/header/HeaderBack'
import styles from './LeaderboardPageStyles'
import Leaderboard from './Leaderboard'
import ReadOnlySelector from '../../Components/Selector/read-only/ReadOnlySelector'
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
