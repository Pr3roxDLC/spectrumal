import React from 'react';
import { View, Text } from 'react-native';
import styles from './PodiumStyles';
import { Avatar } from '@ui-kitten/components';
import { useAppSelector } from '../../store/hooks';

const PodiumComponent = () => {
      const users = useAppSelector(state => state.lobby.users)

  return (
    <View style={styles.podiumContainer}>
      <View style={styles.podiumInnerContainer}>
        {/* Second */}
        <View style={styles.singlePodiumContainer}>
          <Avatar style={styles.avatar} source={require('../../../assets/images/avatar5.svg')} />
          <Text style={styles.username}>Anya</Text>
          <View style={[styles.podiumBase, styles.secondPodium]}>
            <Text style={[styles.number, {color: "#C0C0C0"}]}>2</Text>
          </View>
        </View>

        {/* First */}
        <View style={styles.singlePodiumContainer}>
          <Avatar style={styles.avatar} source={require('../../../assets/images/avatar5.svg')} />
          <Text style={styles.username}>Anya</Text>
          <View style={[styles.podiumBase, styles.firstPodium]}>
            <Text style={[styles.number, {color: "#FFD700"}]}>1</Text>
          </View>
        </View>

        {/* Third */}
        <View style={styles.singlePodiumContainer}>
          <Avatar style={styles.avatar} source={require('../../../assets/images/avatar5.svg')} />
          <Text style={styles.username}>Anya</Text>
          <View style={[styles.podiumBase, styles.thirdPodium]}>
            <Text style={[styles.number, {color: "#CD7F32"}]}>3</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default PodiumComponent;

