import React, { Dispatch, SetStateAction } from 'react'
import { View, Text } from 'react-native'

export interface Props{
  setPage: Dispatch<SetStateAction<string>>;
}


const GuessClue = (props: Props) => {
  return (
    <View>
      <Text>This is the guess clue page!</Text>
    </View>
  )
}

export default GuessClue
