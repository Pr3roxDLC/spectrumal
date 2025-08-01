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
        <GamePackage price={"$5.50"} />
        <GamePackage price={"$5.50"}/>
        <GamePackage price={"$5.50"}/>
      </View>
    </>
  )
}

export default GamePackages
