import React, { Dispatch, SetStateAction } from "react";
import { View } from "react-native";
import PlayNavBar from "../Components/PlayComponents/PlayNavBar";
import styles from "../Styles/PlayStyles";
import HeaderBack from "../Components/GlobalComponents/HeaderBack";

export interface Props{
  setPage: Dispatch<SetStateAction<string>>;
}

const Play = (props: Props) => {

    return (
        <View style={styles.container}>
            <HeaderBack onPress={() => props.setPage("Main Menu")} />
            <PlayNavBar setPage={props.setPage}/>
        </View>
    );
};

export default Play;


