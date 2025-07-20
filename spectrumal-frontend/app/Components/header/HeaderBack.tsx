import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import styles from './HeaderBackStyles';
import GlassContainer from '../glassContainer/GlassContainer';
import Feather from '@expo/vector-icons/Feather';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { goBackToPreviousTabAction, openTabOnTopAction, TabType } from '../../store/features/navigation/navigationSlice';
import Ionicons from '@expo/vector-icons/Ionicons';



const HeaderBack = () => {
  const dispatch = useAppDispatch();
  const tabStack = useAppSelector(state => state.navigation.tabStack);


  const currentTab = tabStack[tabStack.length - 1]?.type;


  const returnToPreviousTab = () => {
    dispatch(goBackToPreviousTabAction())
  }

  const handleSettingsClick = () => {
    dispatch(openTabOnTopAction({ type: TabType.SETTINGS_PAGE }))
  }

  const handleGameSettingsClick = () => {
    dispatch(openTabOnTopAction({ type: TabType.GAME_SETTINGS_PAGE}))
  }

  return (
    <View style={styles.headerContainer}>
      <View style={{ width: 50 }}>
        {currentTab !== TabType.MAIN_MENU && (
          <TouchableOpacity onPress={returnToPreviousTab}>
            <GlassContainer width={50} height={50}>
              <AntDesign style={styles.backIcon} name="left" size={28} />
            </GlassContainer>
          </TouchableOpacity>
        )}
      </View>

      <View style={{ flex: 1 }} />

      <View style={{ width: 50 }}>
        {currentTab === TabType.START_LOBBY ?  (
          <TouchableOpacity onPress={handleGameSettingsClick}>
            <GlassContainer width={50} height={50}>
              <Ionicons name="game-controller-outline" style={styles.settingIcon} size={28}  />
            </GlassContainer>
          </TouchableOpacity>
        ): currentTab !== TabType.SETTINGS_PAGE && currentTab !== TabType.JOIN_LOBBY && currentTab !== TabType.GAME_SETTINGS_PAGE  ? (
          <TouchableOpacity onPress={handleSettingsClick}>
            <GlassContainer width={50} height={50}>
              <Feather style={styles.settingIcon} name="settings" size={28} />
            </GlassContainer>
          </TouchableOpacity>
        ) : null}
      </View>

    </View>
  )
}

export default HeaderBack
