import React, { useEffect } from 'react'
import { View } from 'react-native'
import styles from './LeaderboardPageStyles'
import Leaderboard from './Leaderboard'
import ReadOnlySelector from '../../Components/Selector/read-only/ReadOnlySelector'
import ContinuingRound from './ContinuingRound'
import * as Haptics from 'expo-haptics';

const LeaderboardPage = () => {
  useEffect(() => {
    const delayBeforeStart = 500; 
    const pulseCount = 24; 
    const interval = 50;

    const startShake = () => {
      let count = 0;
      const intervalId = setInterval(() => {
        if (count >= pulseCount) {
          clearInterval(intervalId);
          return;
        }
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy);
        count++;
      }, interval);
    };

    const timeoutId = setTimeout(startShake, delayBeforeStart);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);
  
  return (
    <>
      <View style={styles.leaderboardContainer}>
        <ReadOnlySelector x={40} y={80}></ReadOnlySelector>
        <Leaderboard></Leaderboard>
        <ContinuingRound></ContinuingRound>
      </View>
    </>
  )
}

export default LeaderboardPage


