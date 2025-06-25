import React, { Dispatch, SetStateAction } from 'react'
import { View, Text } from 'react-native'
import GradientBackground from '../Components/GlobalComponents/GradientBackground';
import styles from '../Styles/SettingsStyles';
import HeaderBack from '../Components/GlobalComponents/HeaderBack';
import GlassContainer from '../Components/GlobalComponents/GlassContainer';
import ToggleButton from '../Components/SettingsComponents/ToggleButton';

export interface Props {
  setPage: Dispatch<SetStateAction<string>>;
  setPreviousPage: Dispatch<SetStateAction<string | null>>
  previousPage: string | null;
}


const SettingsPage = (props: Props) => {
  return (
    <GradientBackground>
      <HeaderBack goToSettings={() => props.setPage("Settings")} onPress={() => props.setPage(props.previousPage ?? "Main Menu")}></HeaderBack>
      <View style={styles.settingsContainer}>
        <GlassContainer style={{ marginTop: 20 }} width="90%" height={55}>
          <View style={styles.settingsOptionContainer}>
            <Text style={styles.settingsOptionText}>Haptics</Text>
            <ToggleButton
              initialValue={false}
              onToggle={(value) =>  value}></ToggleButton>
          </View>
        </GlassContainer>
        <GlassContainer style={{ marginTop: 20 }} width="90%" height={55}>
          <View style={styles.settingsOptionContainer}>
            <Text style={styles.settingsOptionText}>Music</Text>
            <ToggleButton
              initialValue={false}
              onToggle={(value) =>  value}></ToggleButton>
          </View>
        </GlassContainer>
        <GlassContainer style={{ marginTop: 20 }} width="90%" height={55}>
          <View style={styles.settingsOptionContainer}>
            <Text style={styles.settingsOptionText}>Audio</Text>
            <ToggleButton
              initialValue={false}
              onToggle={(value) =>  value}></ToggleButton>
          </View>
        </GlassContainer>
        <GlassContainer style={{ marginTop: 20 }} width="90%" height={55}>
          <View style={styles.settingsOptionContainer}>
            <Text style={styles.settingsOptionText}>About</Text>
            <ToggleButton
              initialValue={false}
              onToggle={(value) =>  value}></ToggleButton>
          </View>
        </GlassContainer>
      </View>
    </GradientBackground>
  )
}

export default SettingsPage
