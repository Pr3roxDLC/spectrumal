import React, { Dispatch, SetStateAction } from 'react'
import { View, Text } from 'react-native'
import HeaderBack from '../Components/GlobalComponents/HeaderBack';

export interface Props{
  setPage: Dispatch<SetStateAction<string>>;
}


const HowToPlay = (props: Props) => {
  return (
    <View>
      <HeaderBack onPress={() => props.setPage("Main Menu")} />
      <Text>This is the how to play screen!</Text>
    </View>
  )
}

export default HowToPlay
