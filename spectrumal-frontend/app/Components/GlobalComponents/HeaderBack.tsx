import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import styles from '../ComponentStyles/HeaderBackStyles';
import GlassContainer from './GlassContainer';
import Feather from '@expo/vector-icons/Feather';
import { useAppDispatch } from '../../store/hooks';
import { goBackToPreviousTabAction, openTabOnTopAction, TabType } from '../../store/navigationSlice';



const HeaderBack = () => {
  const dispatch = useAppDispatch();
  const returnToPreviousTab = () => {
    dispatch(goBackToPreviousTabAction())
  }

  const handleSettingsClick = () => {
    dispatch(openTabOnTopAction({ type: TabType.SETTINGS_PAGE }))
  }

  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity onPress={returnToPreviousTab}>
        <GlassContainer width={50} height={50}>
        <AntDesign style={styles.backIcon} name="left" size={28} />
        </GlassContainer>
      </TouchableOpacity>
       <TouchableOpacity onPress={handleSettingsClick}>
        <GlassContainer width={50} height={50}>
        <Feather style={styles.settingIcon} name="settings" size={28} />
        </GlassContainer>
      </TouchableOpacity>
    </View>
  )
}

export default HeaderBack
