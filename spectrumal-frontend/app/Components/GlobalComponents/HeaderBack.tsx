import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import styles from '../ComponentStyles/HeaderBackStyles';
import GlassContainer from './GlassContainer';
import Feather from '@expo/vector-icons/Feather';

export interface Props {
  onPress: () => void;
  goToSettings: () => void
}


const HeaderBack = (props: Props) => {
  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity onPress={() => props.onPress()}>
        <GlassContainer width={50} height={50}>
        <AntDesign style={styles.backIcon} name="left" size={28} />
        </GlassContainer>
      </TouchableOpacity>
       <TouchableOpacity onPress={props.goToSettings}>
        <GlassContainer width={50} height={50}>
        <Feather style={styles.settingIcon} name="settings" size={28} />
        </GlassContainer>
      </TouchableOpacity>
    </View>
  )
}

export default HeaderBack
