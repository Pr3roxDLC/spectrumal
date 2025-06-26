import React from 'react'
import { View, Text } from 'react-native'
import HeaderBack from '../Components/GlobalComponents/HeaderBack'
import styles from '../Styles/LeaderboardPageStyles'
import Leaderboard from '../Components/LeaderboardComponents/Leaderboard'

const LeaderboardPage = () => {
  return (
    <>
      <HeaderBack></HeaderBack>
      <View style={styles.leaderboardContainer}>
        <Leaderboard></Leaderboard>
      </View>
    </>
  )
}

export default LeaderboardPage
