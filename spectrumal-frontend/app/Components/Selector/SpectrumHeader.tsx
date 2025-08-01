import React from 'react'
import { View, Text } from 'react-native'
import styles from './SpectrumHeaderStyles'
import { useAppSelector } from '../../store/hooks'

const SpectrumHeader = () => {
const header = useAppSelector(state => state.game.spectrum?.header)

  return (
    <View style={styles.container}>
     <Text style={styles.text}>{header}</Text>
    </View>
  )
}

export default SpectrumHeader
