import React, { Dispatch, SetStateAction } from 'react'
import { View } from 'react-native'
import WaitingForHost from '../Components/JoinLobbyComponents/WaitingForHost'
import styles from '../Styles/JoinLobbyStyles';
import HeaderBack from '../Components/GlobalComponents/HeaderBack';
import LobbyComponent from '../Components/StartLobbyComponents/LobbyComponent';
import GradientBackground from '../Components/GlobalComponents/GradientBackground';

export interface Props {
    setPage: Dispatch<SetStateAction<string>>;
}

const JoinLobby = (props: Props) => {
    return (
        <GradientBackground>
            <HeaderBack onPress={() => props.setPage("Play")} />
            <View style={styles.lobbyContainer}>
                <WaitingForHost />
                <LobbyComponent />
            </View>
        </GradientBackground>
    )
}

export default JoinLobby
