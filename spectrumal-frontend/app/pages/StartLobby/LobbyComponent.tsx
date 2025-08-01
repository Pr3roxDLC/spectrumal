import React from 'react'
import { View, Text } from 'react-native'
import styles from './StartLobbyStyles'
import GlassContainer from '../../Components/glassContainer/GlassContainer';
import LobbyUser from './LobbyUser';
import { useAppSelector } from '../../store/hooks';





const LobbyComponent = () => {

  const users = useAppSelector(state => state.lobby.users)



  const numberOfUsers = useAppSelector(state =>state.lobby.users.length)
  const minimumUsers = 3
  const usersNeeded = minimumUsers - numberOfUsers

  let waitingMessage = ""
  if(usersNeeded > 1){
    waitingMessage = `Waiting for ${usersNeeded} more users to join...`
  }
  else if (usersNeeded === 1) {
    waitingMessage = 'Waiting for 1 more user to join...'
  } else {
    waitingMessage = 'Ready to start the game!'
  }


  return (
    <GlassContainer width="80%" height="40%">
      <View style={styles.lobbyComponentContainer}>
        <View style={styles.lobbyTitleContainer}>
          <Text style={styles.lobbyTitle}>{waitingMessage}</Text>
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

