import React from 'react'
import { TouchableOpacity, View, ViewStyle } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import styles from '../ComponentStyles/HeaderBackStyles';

export interface Props {
    onPress: () => void;
}

const HeaderBack = (props: Props) => {
  return (
        <View style={styles.headerContainer}>
            <TouchableOpacity onPress={() => props.onPress()}>
      <AntDesign style={styles.backIcon} name="left" size={24} />
      </TouchableOpacity>
      </View>
  )
}

export default HeaderBack
