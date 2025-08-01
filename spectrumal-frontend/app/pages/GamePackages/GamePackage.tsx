import React from 'react'
import { View, Text } from 'react-native'
import GlassContainer from '../../Components/glassContainer/GlassContainer'
import styles from './GamePackagesStyles'
import Button from '../../Components/button/Button'
import InteractableAxis from '../../Components/Selector/interactable/SelectorAxis'

export interface Props {
    label: string,
    price: string
}

const GamePackage = (props: Props) => {
  return (
    <GlassContainer style={styles.packageContainer} width={"85%"} height={150}>
      <View style={styles.leftContainer}>
        <InteractableAxis></InteractableAxis>
      </View>
      <View style={styles.rightContainer}>
        <Text>{props.label}</Text>
        <Button style={[{width: "90%"}]} label={props.price}></Button>
      </View>
    </GlassContainer>
  )
}

export default GamePackage
