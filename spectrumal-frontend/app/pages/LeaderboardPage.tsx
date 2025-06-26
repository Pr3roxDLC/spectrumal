import React from 'react'
import { View, Text } from 'react-native'
import HeaderBack from '../Components/GlobalComponents/HeaderBack'
import styles from '../Styles/LeaderboardPageStyles'
import Leaderboard from '../Components/LeaderboardComponents/Leaderboard'
import ReadOnlySelector from '../Components/Selector/read-only/ReadOnlySelector'
import ContinuingRound from '../Components/LeaderboardComponents/ContinuingRound'

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
