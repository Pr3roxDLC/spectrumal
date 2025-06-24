import React from 'react'
import styles from '../../Styles/GiveClueStyles'
import { View, Text, TextInput } from 'react-native'

const GiveClueField = () => {
  return (
    <View style={styles.clueContainer}>
      <Text style={styles.giveAClue}>Give a clue</Text>
      <TextInput style={styles.clueInput}></TextInput>
    </View>
  )
}

export default GiveClueField
