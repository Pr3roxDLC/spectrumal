import React, { useEffect, useRef, useState } from 'react';
import { View, Text, Image, Animated, ScrollView } from 'react-native';
import styles from '../ComponentStyles/LeaderBoardStyles';
import GlassContainer from '../GlobalComponents/GlassContainer';
import { LinearGradient } from 'expo-linear-gradient';

const CARD_HEIGHT = 60;

const initialUsers = [
  { id: '1', name: 'User 1', avatar: require('../../../assets/avatar5.svg') },
  { id: '2', name: 'User 2', avatar: require('../../../assets/avatar6.svg') },
  { id: '3', name: 'User 3', avatar: require('../../../assets/avatar7.svg') },
  { id: '4', name: 'User 4', avatar: require('../../../assets/avatar8.svg') },
  { id: '5', name: 'User 5', avatar: require('../../../assets/avatar8.svg') },
  { id: '6', name: 'User 6', avatar: require('../../../assets/avatar8.svg') },
  { id: '7', name: 'User 7', avatar: require('../../../assets/avatar8.svg') },
  { id: '8', name: 'User 8', avatar: require('../../../assets/avatar8.svg') },
];

// Helper to shuffle array
const shuffleArray = (array) => {
  const copy = [...array];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
};

const Leaderboard = () => {
  const [userData, setUserData] = useState([]);
  const positions = useRef({});
  const containerHeight = CARD_HEIGHT * initialUsers.length;

  useEffect(() => {
    // Assign random scores
    const usersWithScores = initialUsers.map(user => ({
      ...user,
      score: Math.floor(Math.random() * 1000) + 500,
    }));

    setUserData(usersWithScores);

    // Shuffle initially
    const shuffled = shuffleArray(usersWithScores);

    // Initialize Animated.Value for each user
    shuffled.forEach((user, index) => {
      positions.current[user.id] = new Animated.Value(index * CARD_HEIGHT);
    });

    // Delay, then animate to sorted positions
    setTimeout(() => {
      const sorted = [...usersWithScores].sort((a, b) => b.score - a.score);
      setUserData(sorted); // Update order for display

      sorted.forEach((user, index) => {
        Animated.timing(positions.current[user.id], {
          toValue: index * CARD_HEIGHT,
          duration: 1800,
          useNativeDriver: false,
        }).start();
      });
    }, 400);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Leaderboard</Text>

      <View style={[styles.fadeWrapper, { height: containerHeight + 20 }]}>
        <ScrollView
          style={{ maxHeight: containerHeight }}
          contentContainerStyle={{ height: containerHeight }}
          showsVerticalScrollIndicator={false}
        >
          <View style={{ position: 'relative', height: containerHeight }}>
            {userData.map(user => {
              const animatedTop = positions.current[user.id] || new Animated.Value(0);
              const rank =
                userData.findIndex(u => u.id === user.id) + 1 || '-';

              return (
                <Animated.View
                  key={user.id}
                  style={{
                    position: 'absolute',
                    left: 0,
                    right: 0,
                    top: animatedTop,
                  }}
                >
                  <GlassContainer width={'100%'} height={CARD_HEIGHT - 10} style={styles.card}>
                    <Text style={styles.rank}>#{rank}</Text>
                    <Image source={user.avatar} style={styles.avatar} />
                    <Text style={styles.name}>{user.name}</Text>
                    <Text style={styles.score}>{user.score} pts</Text>
                  </GlassContainer>
                </Animated.View>
              );
            })}
          </View>
        </ScrollView>

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
