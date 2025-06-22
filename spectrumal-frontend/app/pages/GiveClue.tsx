import React, { Dispatch, SetStateAction } from 'react'
import { View, Text } from 'react-native'
import Slider from '../Components/GiveClueComponents/Slider';


export interface Props{
  setPage: Dispatch<SetStateAction<string>>;
}

const GiveClue = (props: Props) => {
  return (
    <View>
      <Slider />
    </View>
  )
}

export default GiveClue
