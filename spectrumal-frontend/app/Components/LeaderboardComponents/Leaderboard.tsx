import React from 'react'
import styles from '../ComponentStyles/LeaderBoardStyles'
import { View, Text, Image, FlatList } from 'react-native'
import GlassContainer from '../GlobalComponents/GlassContainer';

const leaderboardData = [
  { id: '1', name: 'User 1', score: 1200, avatar: require('../../../assets/avatar1.svg') },
  { id: '2', name: 'User 2', score: 1100, avatar: require('../../../assets/avatar2.svg') },
  { id: '3', name: 'User 3', score: 950, avatar: require('../../../assets/avatar3.svg') },
  { id: '4', name: 'User 4', score: 800, avatar: require('../../../assets/avatar4.svg') },
];


const Leaderboard = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Leaderboard</Text>
      <FlatList
        data={leaderboardData}
        keyExtractor={(item) => item.id}
        renderItem={({ item, index }) => (
          <GlassContainer width={"100%"} height={70} style={styles.card}>
            <Text style={styles.rank}>#{index + 1}</Text>
            <Image source={item.avatar} style={styles.avatar} />
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.score}>{item.score} pts</Text>
          </GlassContainer>
        )}
      />
    </View>
  )
}

export default Leaderboard
