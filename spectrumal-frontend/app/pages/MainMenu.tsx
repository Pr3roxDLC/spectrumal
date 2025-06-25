import React, { Dispatch, SetStateAction } from 'react'
import { View, Text } from 'react-native';
import styles from "../Styles/MainMenuStyles";
import IconNoBg from '../Components/GlobalComponents/IconNoBg';
import Button from '../Components/GlobalComponents/Button';
import GradientBackground from '../Components/GlobalComponents/GradientBackground';
import { useAppDispatch } from '../store/hooks';
import { openTabOnTopAction, TabType } from '../store/navigationSlice';


const MainMenu = () => {
  const dispatch = useAppDispatch()

  const handlePlayClick = () => {
    dispatch(openTabOnTopAction({ type: TabType.PLAY }))
  }

  const handleHowToPlayClick = () => {
    dispatch(openTabOnTopAction({ type: TabType.HOW_TO_PLAY }))
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
            <Button label='Demo' style={{ width: "80%" }}></Button>
          </View>
        </View>
      </View>
    </>
  )
}

export default MainMenu
