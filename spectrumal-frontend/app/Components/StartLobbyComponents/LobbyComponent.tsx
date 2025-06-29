import React from 'react'
import { View, Text } from 'react-native'
import styles from '../../Styles/StartLobbyStyles'
import GlassContainer from '../GlobalComponents/GlassContainer';
import LobbyUser from './LobbyUser';
import { useAppSelector } from '../../store/hooks';





const LobbyComponent = () => {

  const users = useAppSelector(state => state.lobby.users)




  return (
    <GlassContainer width="80%" height="40%">
      <View style={styles.lobbyComponentContainer}>
        <View style={styles.lobbyTitleContainer}>
          <Text style={styles.lobbyTitle}>Lobby</Text>
        </View>
        <View style={styles.usersInLobbyContainer}>
          {users.map((user, index) => (
            <LobbyUser key={index} user={user}></LobbyUser>
          ))}

        </View>
      </View>
    </GlassContainer>
  )
}

export default LobbyComponent

