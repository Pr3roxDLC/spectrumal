import React from 'react'
import { View, Text } from 'react-native'
import styles from './SettingsStyles';
import HeaderBack from '../../Components/header/HeaderBack';
import GlassContainer from '../../Components/glassContainer/GlassContainer';
import ToggleButton from './ToggleButton';
import { useAudio } from './AudioContext';



const SettingsPage = () => {

const { isMusicPlaying, isSfxEnabled, isHapticsEnabled, toggleMusic, toggleHaptics, toggleSfx } = useAudio();

  return (
    <>
      <HeaderBack></HeaderBack>
      <View style={styles.settingsContainer}>
        <GlassContainer width="90%" height={55}>
          <View style={styles.settingsOptionContainer}>
            <Text style={styles.settingsOptionText}>Haptics</Text>
            <ToggleButton
               initialValue={isHapticsEnabled}
      onToggle={toggleHaptics}></ToggleButton>
          </View>
        </GlassContainer>
        <GlassContainer style={{ marginTop: 20 }} width="90%" height={55}>
          <View style={styles.settingsOptionContainer}>
            <Text style={styles.settingsOptionText}>Background Music</Text>
            <ToggleButton
               initialValue={isMusicPlaying}
      onToggle={toggleMusic}></ToggleButton>
          </View>
        </GlassContainer>
        <GlassContainer style={{ marginTop: 20 }} width="90%" height={55}>
          <View style={styles.settingsOptionContainer}>
            <Text style={styles.settingsOptionText}>Sound Effects</Text>
            <ToggleButton
              initialValue={isSfxEnabled}
      onToggle={toggleSfx}></ToggleButton>
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
