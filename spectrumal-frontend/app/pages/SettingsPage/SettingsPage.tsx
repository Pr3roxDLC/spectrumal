import React from 'react'
import { View, Text } from 'react-native'
import styles from './SettingsStyles';
import HeaderBack from '../../Components/header/HeaderBack';
import GlassContainer from '../../Components/glassContainer/GlassContainer';
import ToggleButton from './ToggleButton';
import { useMusic } from './MusicContext';



const SettingsPage = () => {
const { isPlaying, toggleMusic } = useMusic();

  return (
    <>
      <HeaderBack></HeaderBack>
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
               initialValue={isPlaying}
      onToggle={toggleMusic}></ToggleButton>
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
          </View>
        </GlassContainer>
      </View>
    </>
  )
}

export default SettingsPage
