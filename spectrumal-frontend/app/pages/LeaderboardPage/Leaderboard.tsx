import React, { useEffect, useRef, useState } from 'react';
import { View, Text, Image, Animated, ScrollView, Dimensions } from 'react-native';
import styles from './LeaderBoardStyles';
import GlassContainer from '../../Components/glassContainer/GlassContainer';
import { LinearGradient } from 'expo-linear-gradient';
import { useAppSelector } from '../../store/hooks';

const CARD_HEIGHT = 60;

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
  const screenHeight = Dimensions.get('window').height;
  const users = useAppSelector(state => state.lobby.users);
  const previousScoreMap = useAppSelector(state => state.game.previousScore || {});
const newScoreMap = useAppSelector(state => state.game.newScore || {});
  const [userData, setUserData] = useState([]);
  const positions = useRef({});
    const maxContainerHeight = screenHeight * 0.27;
  const totalContentHeight = CARD_HEIGHT * users.length;
  const containerHeight = Math.min(totalContentHeight, maxContainerHeight);
  
    const [isScrollable, setIsScrollable] = useState(false);


  useEffect(() => {
    if (!users || users.length === 0) return;

     const usersWithScores = users.map((user, index) => {
    const id = user.id || `${index}`;
    return {
      ...user,
      id,
      name: user.name || `User ${index + 1}`,
      avatar: require('../../../assets/images/avatar5.svg'),
      score: previousScoreMap[id] ?? 0, 
    };
  });

    setUserData(usersWithScores);

    const shuffled = shuffleArray(usersWithScores);

    shuffled.forEach((user, index) => {
      positions.current[user.id] = new Animated.Value(index * CARD_HEIGHT);
    });

    setTimeout(() => {
    const updatedUsers = users.map((user, index) => {
      const id = user.id || `${index}`;
      return {
        ...user,
        id,
        name: user.name || `User ${index + 1}`,
        avatar: require('../../../assets/images/avatar5.svg'),
        score: newScoreMap[id] ?? 0,
      };
    });

    const sorted = [...updatedUsers].sort((a, b) => b.score - a.score);
    setUserData(sorted);

    sorted.forEach((user, index) => {
      Animated.timing(positions.current[user.id], {
        toValue: index * CARD_HEIGHT,
        duration: 1800,
        useNativeDriver: false,
      }).start();
    });
  }, 400);
}, [users, previousScoreMap, newScoreMap]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Leaderboard</Text>

      <View style={[styles.fadeWrapper, { height: containerHeight + 20 }]}>
        <ScrollView
          style={{ maxHeight: containerHeight }}
          contentContainerStyle={{ height: containerHeight }}
          showsVerticalScrollIndicator={false}
          onContentSizeChange={(contentWidth, contentHeight) => {
    if (contentHeight > containerHeight) {
      setIsScrollable(true);
    } else {
      setIsScrollable(false);
    }
  }}
        >
          <View style={{ position: 'relative', height: containerHeight }}>
            {userData.map(user => {
              const animatedTop = positions.current[user.id] || new Animated.Value(0);
              const rank = userData.findIndex(u => u.id === user.id) + 1;

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
                    <Image
                      source={typeof user.avatar === 'string' ? { uri: user.avatar } : user.avatar}
                      style={styles.avatar}
                    />
                    <Text style={styles.name}>{user.name}</Text>
                    <Text style={styles.score}>{user.score} pts</Text>
                  </GlassContainer>
                </Animated.View>
              );
            })}
          </View>
        </ScrollView>

    {isScrollable && (
  <LinearGradient
    colors={['transparent', 'rgba(10,31,68,0.9)']}
    style={styles.bottomFade}
    pointerEvents="none"
  />
)}
      </View>
    </View>
  );
};

export default Leaderboard;
