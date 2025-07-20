import React from 'react'
import { View, Text } from 'react-native';
import styles from "./MainMenuStyles";
import IconNoBg from '../../Components/icon/IconNoBg';
import Button from '../../Components/button/Button';
import { useAppDispatch } from '../../store/hooks';
import { openTabOnTopAction, TabType } from '../../store/features/navigation/navigationSlice';
import HeaderBack from '../../Components/header/HeaderBack';


const MainMenu = () => {
  const dispatch = useAppDispatch()

  const handlePlayClick = () => {
    dispatch(openTabOnTopAction({ type: TabType.PLAY }))
  }

  const handleHowToPlayClick = () => {
    dispatch(openTabOnTopAction({ type: TabType.HOW_TO_PLAY }))
  }

  const handleDemoPress = () => {
    dispatch(openTabOnTopAction({ type: TabType.LEADERBOARD_PAGE_TEST }))
  }

  return (
    <>
    <HeaderBack></HeaderBack>
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
