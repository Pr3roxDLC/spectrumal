import React from 'react'
import { TouchableOpacity, View, Text } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import styles from '../ComponentStyles/HeaderBackStyles';

export interface Props {
    onPress: () => void;
}

const HeaderBack = (props: Props) => {
  return (
        <View style={styles.headerContainer}>
            <TouchableOpacity onPress={() => props.onPress()}>
      <AntDesign style={styles.backIcon} name="left" size={28} />
      </TouchableOpacity>
      <Text style={styles.backText}>Back</Text>
      </View>
  )
}

export default HeaderBack
