import React, { Dispatch, SetStateAction } from 'react'
import { View } from 'react-native'
import GradientBackground from '../Components/GlobalComponents/GradientBackground';
import styles from '../Styles/SettingsStyles';
import HeaderBack from '../Components/GlobalComponents/HeaderBack';
import GlassContainer from '../Components/GlobalComponents/GlassContainer';

export interface Props{
  setPage: Dispatch<SetStateAction<string>>;
  setPreviousPage: Dispatch<SetStateAction<string | null>>
  previousPage: string | null;
}


const SettingsPage = (props: Props) => {
  return (
    <GradientBackground>
      <HeaderBack goToSettings={() => props.setPage("Settings")} onPress={() => props.setPage(props.previousPage ?? "Main Menu")}></HeaderBack>
      <View style={styles.settingsContainer}>
        <GlassContainer width="90%" height={55}></GlassContainer>
        <GlassContainer width="90%" height={55}></GlassContainer>
        <GlassContainer width="90%" height={55}></GlassContainer>
      </View>
    </GradientBackground>
  )
}

export default SettingsPage
