import React from 'react'
import styles from '../../Styles/GiveClueStyles'
import { View, Text } from 'react-native'
import CustomTextInput from '../GlobalComponents/CustomTextInput'

const GiveClueField = () => {
  return (
    <View style={styles.clueContainer}>
        <Text style={styles.giveAClue}>Give a clue</Text>
        <CustomTextInput placeholder="Type your clue here" />
    </View>
  )
}

export default GiveClueField
