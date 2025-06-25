import React from 'react'
import { Text, View } from 'react-native'
import styles from '../../ComponentStyles/InteractableSelectorStyles'

const InteractableAxis = () => {
  return (
    <>
                  <Text style={styles.leftXaxisText}>
                Left
            </Text>
            <Text style={styles.rightXaxisText}>
                Right
            </Text>
            <Text style={styles.topYaxisText}>Top</Text>
            <Text style={styles.bottomYaxisText}>Bottom</Text>

            <View style={styles.xAxisLine} />
            <View style={styles.yAxisLine} />
            <View style={[styles.arrow, styles.leftArrow]} />
            <View style={[styles.arrow, styles.rightArrow]} />
            <View style={[styles.arrow, styles.topArrow]} />
            <View style={[styles.arrow, styles.bottomArrow]} />
    </>
  )
}

export default InteractableAxis
