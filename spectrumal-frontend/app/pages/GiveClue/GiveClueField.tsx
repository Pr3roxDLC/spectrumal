import React from 'react'
import styles from './GiveClueStyles'
import { View, Text } from 'react-native'
import CustomTextInput from '../../components/customTextInput/CustomTextInput'

export interface Props {
  setClueInput: React.Dispatch<React.SetStateAction<string>>
}

const GiveClueField = (props: Props) => {
  return (
    <View style={styles.clueContainer}>
        <Text style={styles.giveAClue}>Give a clue</Text>
        <CustomTextInput onChange={props.setClueInput} placeholder="Type your clue here" />
    </View>
  )
}

export default GiveClueField
