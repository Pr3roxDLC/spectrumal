import React, { Dispatch, SetStateAction } from 'react'
import { View, Text } from 'react-native'

export interface Props{
  setPage: Dispatch<SetStateAction<string>>;
}


const SettingsPage = (props: Props) => {
  return (
    <View>
      <Text>This is the settings page</Text>
    </View>
  )
}

export default SettingsPage
