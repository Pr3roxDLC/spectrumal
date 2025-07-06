import React from 'react'
import { View, Text } from 'react-native';
import styles from "./MainMenuStyles";
import IconNoBg from '../../components/icon/IconNoBg';
import Button from '../../components/button/Button';
import { useAppDispatch } from '../../store/hooks';
import { openTabOnTopAction, TabType } from '../../store/features/navigation/navigationSlice';


const MainMenu = () => {
  const dispatch = useAppDispatch()

  const handlePlayClick = () => {
    dispatch(openTabOnTopAction({ type: TabType.PLAY }))
  }

  const handleHowToPlayClick = () => {
    dispatch(openTabOnTopAction({ type: TabType.HOW_TO_PLAY }))
  }

  const handleDemoPress = () => {
    dispatch(openTabOnTopAction({ type: TabType.GAME_STARTING }))
  }

  return (
    <>
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>Spectrumal</Text>
        </View>
        <IconNoBg></IconNoBg>

        {/*buttons */}
        <View style={styles.buttonsOuterContainer}>
          <View style={styles.buttonsContainer}>
            <Button label='Play' onPress={handlePlayClick} style={{ width: "80%" }}></Button>
            <Button label='How To Play' onPress={handleHowToPlayClick} style={{ width: "80%" }}></Button>
            <Button onPress={handleDemoPress} label='Demo' style={{ width: "80%" }}></Button>
          </View>
        </View>
      </View>
    </>
  )
}

export default MainMenu
