import React from 'react'
import { View } from 'react-native'
import WaitingForHost from './WaitingForHost'
import styles from './JoinLobbyStyles';
import LobbyComponent from '../StartLobby/LobbyComponent';


const JoinLobby = () => {
    return (
        <>
            <View style={styles.lobbyContainer}>
                <WaitingForHost />
                <LobbyComponent />
            </View>
        </>
    )
}

export default JoinLobby
