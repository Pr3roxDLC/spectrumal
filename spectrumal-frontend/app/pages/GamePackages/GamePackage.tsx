import React from 'react'
import { View, Text } from 'react-native'
import GlassContainer from '../../Components/glassContainer/GlassContainer'
import styles from './GamePackagesStyles'
import Button from '../../Components/button/Button'
export interface Props {
    label: string,
    price: string,
    badgeText: string,
    badgeColor: string;
}

const GamePackage = (props: Props) => {
  return (
    <GlassContainer style={styles.packageContainer} width={"85%"} height={150}>
      <View style={styles.leftContainer}>
      </View>
      <View style={styles.rightContainer}>
        <Text style={styles.label}>{props.label}</Text>
        <View style={[styles.badge, { backgroundColor: props.badgeColor }]}>

          <Text style={styles.badgeText}>{props.badgeText}</Text>
        </View>
        <Button style={[{width: "90%"}]} label={props.price}></Button>
      </View>
    </GlassContainer>
  )
}

export default GamePackage
