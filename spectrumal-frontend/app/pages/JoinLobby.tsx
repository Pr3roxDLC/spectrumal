import React, { Dispatch, SetStateAction } from 'react'
import { View } from 'react-native'
import WaitingForHost from '../Components/JoinLobbyComponents/WaitingForHost'
import styles from '../Styles/JoinLobbyStyles';
import HeaderBack from '../Components/GlobalComponents/HeaderBack';
import LobbyComponent from '../Components/StartLobbyComponents/LobbyComponent';


const JoinLobby = () => {
    return (
        <>
            <HeaderBack
            />
            <View style={styles.lobbyContainer}>
                <WaitingForHost />
                <LobbyComponent />
            </View>
        </>
    )
}

export default JoinLobby
