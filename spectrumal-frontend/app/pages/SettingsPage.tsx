import React from 'react'
import { View, Text } from 'react-native'
import styles from '../Styles/SettingsStyles';
import HeaderBack from '../Components/GlobalComponents/HeaderBack';
import GlassContainer from '../Components/GlobalComponents/GlassContainer';
import ToggleButton from '../Components/SettingsComponents/ToggleButton';



const SettingsPage = () => {
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
          </View>
        </GlassContainer>
      </View>
    </>
  )
}

export default SettingsPage
