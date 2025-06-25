import React, { Dispatch, SetStateAction } from 'react'
import { View } from 'react-native'
import WaitingForHost from '../Components/JoinLobbyComponents/WaitingForHost'
import styles from '../Styles/JoinLobbyStyles';
import HeaderBack from '../Components/GlobalComponents/HeaderBack';
import LobbyComponent from '../Components/StartLobbyComponents/LobbyComponent';
import GradientBackground from '../Components/GlobalComponents/GradientBackground';

export interface Props {
    setPage: Dispatch<SetStateAction<string>>
    setPreviousPage: Dispatch<SetStateAction<string | null>>
}

const JoinLobby = (props: Props) => {
    return (
        <>
            <HeaderBack
                goToSettings={() => {
                    props.setPreviousPage("Join Lobby");
                    props.setPage('Settings');
                }}
                onPress={() => {
                    props.setPreviousPage("Join Lobby");
                    props.setPage("Play");
                }}
            />
            <View style={styles.lobbyContainer}>
                <WaitingForHost />
                <LobbyComponent />
            </View>
        </>
    )
}

export default JoinLobby
