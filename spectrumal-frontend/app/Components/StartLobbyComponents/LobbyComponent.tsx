import React from 'react'
import { View, Text } from 'react-native'
import styles from '../../Styles/StartLobbyStyles'
import { Avatar } from '@ui-kitten/components';
import GlassContainer from '../GlobalComponents/GlassContainer';

const LobbyComponent = () => {
  return (
    <GlassContainer width="80%" height="40%">
    <View style={styles.lobbyComponentContainer}>
      <View style={styles.lobbyTitleContainer}>
        <Text style={styles.lobbyTitle}>Lobby</Text>
      </View>
      <View style={styles.usersInLobbyContainer}>
        <View style={styles.userAndName}>
        <Avatar source={require('../../../assets/avatar4.svg')} />
        <Text style={styles.userName}>User 1</Text>
        </View>
        <View style={styles.userAndName}>
        <Avatar source={require('../../../assets/avatar3.svg')} />
        <Text style={styles.userName}>User 2</Text>
        </View>
        <View style={styles.userAndName}>
        <Avatar source={require('../../../assets/avatar2.svg')} />
        <Text style={styles.userName}>User 3</Text>
        </View>
        <View style={styles.userAndName}>
        <Avatar source={require('../../../assets/avatar1.svg')} />
        <Text style={styles.userName}>User 4</Text>
        </View>
      </View>
    </View>
    </GlassContainer>
  )
}

export default LobbyComponent

