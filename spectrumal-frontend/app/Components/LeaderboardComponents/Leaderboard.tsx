import React from 'react';
import { View, Text, Image, FlatList } from 'react-native';
import styles from '../ComponentStyles/LeaderBoardStyles';
import GlassContainer from '../GlobalComponents/GlassContainer';
import { LinearGradient } from 'expo-linear-gradient';

const leaderboardData = [
  { id: '1', name: 'User 1', score: 1200, avatar: require('../../../assets/avatar5.svg') },
  { id: '2', name: 'User 2', score: 1100, avatar: require('../../../assets/avatar6.svg') },
  { id: '3', name: 'User 3', score: 950, avatar: require('../../../assets/avatar7.svg') },
  { id: '4', name: 'User 4', score: 800, avatar: require('../../../assets/avatar8.svg') },
  { id: '5', name: 'User 5', score: 750, avatar: require('../../../assets/avatar8.svg') },
  { id: '6', name: 'User 6', score: 700, avatar: require('../../../assets/avatar8.svg') },
  { id: '7', name: 'User 7', score: 650, avatar: require('../../../assets/avatar8.svg') },
  { id: '8', name: 'User 8', score: 600, avatar: require('../../../assets/avatar8.svg') },
];

const Leaderboard = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Leaderboard</Text>

      <View style={styles.fadeWrapper}>
        <FlatList
          data={leaderboardData}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
          style={styles.scrollArea}
          renderItem={({ item, index }) => (
            <GlassContainer width={'100%'} height={40} style={styles.card}>
              <Text style={styles.rank}>#{index + 1}</Text>
              <Image source={item.avatar} style={styles.avatar} />
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.score}>{item.score} pts</Text>
            </GlassContainer>
          )}
        />

        <LinearGradient
          colors={['transparent', 'rgba(10,31,68,0.9)']}
          style={styles.bottomFade}
          pointerEvents="none"
        />
      </View>
    </View>
  );
};

export default Leaderboard;
