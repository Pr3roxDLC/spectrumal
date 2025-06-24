import React, { Dispatch, SetStateAction } from 'react'
import { View, Text } from 'react-native';
import styles from "../Styles/MainMenuStyles";
import IconNoBg from '../Components/GlobalComponents/IconNoBg';
import Button from '../Components/GlobalComponents/Button';

export interface Props{
  setPage: Dispatch<SetStateAction<string>>;
}

const MainMenu = (props: Props) => {
  return (
    <View style={styles.mainMenuContainer}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Spectrumal</Text>
      </View>
      <IconNoBg></IconNoBg>

      {/*buttons */}
      <View style={styles.buttonsOuterContainer}>
        <View style={styles.buttonsContainer}>
     <Button label='Play' onPress={() => props.setPage("Play")} style={{ width: "85%"}}></Button>
          <Button label='How To Play' onPress={() => props.setPage("How To Play")} style={{ width: "85%"}}></Button>
          <Button label='Demo' onPress={() => props.setPage("Demo")} style={{ width: "85%"}}></Button>
        </View>
        </View>
    </View>
  )
}

export default MainMenu
