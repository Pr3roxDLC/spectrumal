import React from 'react'
import { View, Share, Alert } from 'react-native'
import Button from '../../Components/button/Button'
import HeaderBack from '../../Components/header/HeaderBack';
import styles from './StartLobbyStyles';
import GameCode from './GameCode';
import LobbyComponent from './LobbyComponent';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { startGameAction } from '../../store/features/game/gameSlice';

const Lobby = () => {
  const dispatch = useAppDispatch()
  const numberOfPlayers = useAppSelector(state => state.lobby.users.length)
  const lobbyCode = useAppSelector(state => state.lobby.lobbyCode);
  const moreThanThreePlayers = numberOfPlayers > 2

  const handleInviteFriendsPress = async () => {
    try {
      const result = await Share.share({
        message: `Join my game on Spectrumal! Use this code: ${lobbyCode}`,
      });

      if (result.action === Share.sharedAction) {
        if (result.activityType) {
        } else {
        }
      } else if (result.action === Share.dismissedAction) {
      }
    } catch (error) {
      Alert.alert('Error', 'Failed to share the game code. Please try again.');
    }
  }

  const handleStartGameClick = () => {
    dispatch(startGameAction())
  }

  return (
    <>
      <HeaderBack />
      <View style={styles.lobbyContainer}>
        <GameCode />
        <LobbyComponent />
        <Button label="Test Start Game" onPress={handleStartGameClick} style={{ width: "80%" }} />
        <Button label="Invite Friends" style={{ width: "80%" }} onPress={handleInviteFriendsPress} />
        <Button disabled={!moreThanThreePlayers} label="Start Game" onPress={handleStartGameClick} style={{ width: "80%" }} />
      </View>
    </>
  )
}

export default Lobby
