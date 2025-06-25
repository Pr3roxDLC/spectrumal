import React, { Dispatch, SetStateAction } from 'react'
import { View, Text } from 'react-native'
import HeaderBack from '../Components/GlobalComponents/HeaderBack';


const HowToPlay = () => {
  return (
    <View>
      <HeaderBack goToSettings={() => {props.setPage('Settings'); props.setPreviousPage("How To Play")}} onPress={() => props.setPage("Main Menu")} />
      <Text>This is the how to play screen!</Text>
    </View>
  )
}

export default HowToPlay
