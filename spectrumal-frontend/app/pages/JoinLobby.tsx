import React, { Dispatch, SetStateAction } from 'react'
import { View } from 'react-native'
import WaitingForHost from '../Components/JoinLobbyComponents/WaitingForHost'
import styles from '../Styles/JoinLobbyStyles';
import HeaderBack from '../Components/GlobalComponents/HeaderBack';
import LobbyComponent from '../Components/StartLobbyComponents/LobbyComponent';

export interface Props {
    setPage: Dispatch<SetStateAction<string>>;
}

const JoinLobby = (props: Props) => {
    return (
        <View style={styles.container}>
            <HeaderBack onPress={() => props.setPage("Play")} />
                <View style={styles.lobbyContainer}>
            <WaitingForHost />
            <LobbyComponent />
            </View>
        </View>
    )
}

export default JoinLobby
