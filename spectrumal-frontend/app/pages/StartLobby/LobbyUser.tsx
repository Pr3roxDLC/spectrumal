import React from 'react'
import { View, Text } from 'react-native'
import styles from './StartLobbyStyles'
import { Avatar } from '@ui-kitten/components';
import { User } from '../../api';

export interface Props {
   user: User
}

const LobbyUser = (props: Props) => {
  return (
    <View style={styles.userAndName}>
        <Avatar source={require('../../../assets/images/avatar5.svg')} />
        <Text style={styles.userName}>{props.user.name}</Text>
        </View>
  )
}

export default LobbyUser
