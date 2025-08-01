import React from 'react'
import { DimensionValue, Text, View } from 'react-native'
import styles from './InteractableSelectorStyles'
import { useAppSelector } from '../../../store/hooks'

export interface Props {
   height?: DimensionValue;
   width?: DimensionValue
}

const InteractableAxis = (props: Props) => {
const top = useAppSelector(state => state.game.spectrum?.dimensions?.[1].left)
const bottom = useAppSelector(state => state.game.spectrum?.dimensions?.[1].right)
const left = useAppSelector(state => state.game.spectrum?.dimensions?.[0].left)
const right = useAppSelector(state => state.game.spectrum?.dimensions?.[0].right)

  return (
    <>
                  <Text style={styles.leftXaxisText}>
                {left}
            </Text>
            <Text style={styles.rightXaxisText}>
                {right}
            </Text>
            <Text style={styles.topYaxisText}>{top}</Text>
            <Text style={styles.bottomYaxisText}>{bottom}</Text>

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
