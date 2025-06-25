import React, { Dispatch, SetStateAction } from 'react'
import { View, Text } from 'react-native';
import styles from "../Styles/MainMenuStyles";
import IconNoBg from '../Components/GlobalComponents/IconNoBg';
import Button from '../Components/GlobalComponents/Button';
import GradientBackground from '../Components/GlobalComponents/GradientBackground';

export interface Props {
  setPage: Dispatch<SetStateAction<string>>;
}

const MainMenu = (props: Props) => {
  return (
    <GradientBackground>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Spectrumal</Text>
      </View>
      <IconNoBg></IconNoBg>

      {/*buttons */}
      <View style={styles.buttonsOuterContainer}>
        <View style={styles.buttonsContainer}>
          <Button label='Play' onPress={() => props.setPage("Play")} style={{ width: "80%" }}></Button>
          <Button label='How To Play' onPress={() => props.setPage("How To Play")} style={{ width: "80%" }}></Button>
          <Button label='Demo' onPress={() => props.setPage("Demo")} style={{ width: "80%" }}></Button>
        </View>
      </View>
    </GradientBackground>
  )
}

export default MainMenu
