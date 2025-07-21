import React, { useState }  from 'react'
import { View } from 'react-native'
import WaitingForHost from './WaitingForHost'
import styles from './JoinLobbyStyles';
import LobbyComponent from '../StartLobby/LobbyComponent';
import HeaderBack from '../../Components/header/HeaderBack';
import LeaveLobby from '../LeaveCloseLobby/LeaveLobby';


const JoinLobby = () => {
const [showLeaveModal, setShowLeaveModal] = useState(false)

const handleBackPress = () => {
    setShowLeaveModal(true)
}
    return (
        <>
            <HeaderBack onBackPress={handleBackPress}></HeaderBack>
            <View style={styles.lobbyContainer}>
                <WaitingForHost />
                <LobbyComponent />
            </View>
            <LeaveLobby modalVisible={showLeaveModal} setModalVisible={setShowLeaveModal} />
        </>
    )
}



export default JoinLobby
