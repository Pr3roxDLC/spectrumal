import React from 'react'
import { View } from 'react-native'
import WaitingForHost from './WaitingForHost'
import styles from './JoinLobbyStyles';
import LobbyComponent from '../StartLobby/LobbyComponent';
import HeaderBack from '../../Components/header/HeaderBack';


const JoinLobby = () => {
    return (
        <>
            <HeaderBack></HeaderBack>
            <View style={styles.lobbyContainer}>
                <WaitingForHost />
                <LobbyComponent />
            </View>
        </>
    )
}

export default JoinLobby
