import React from 'react'
import { View } from 'react-native'
import HeaderBack from '../../Components/header/HeaderBack'
import styles from './GamePackagesStyles'
import GamePackage from './GamePackage'



const GamePackages = () => {
  return (
    <>
      <HeaderBack></HeaderBack>
      <View style={styles.container}>
        <GamePackage badgeText={"Trivia"} badgeColor='red' label={"Game Package 1"} price={"$5.50"} />
        <GamePackage badgeText={"Strategy"}  badgeColor='blue' label={"Game Package 2"} price={"$5.50"}/>
        <GamePackage badgeText={"Team Work"} badgeColor='green' label={"Game Package 3"} price={"$5.50"}/>
      </View>
    </>
  )
}

export default GamePackages
