import React, { Dispatch, SetStateAction } from "react";
import { View } from "react-native";
import PlayNavBar from "../Components/PlayComponents/PlayNavBar";
import styles from "../Styles/PlayStyles";
import HeaderBack from "../Components/GlobalComponents/HeaderBack";
import GradientBackground from "../Components/GlobalComponents/GradientBackground";
export interface Props{
  setPage: Dispatch<SetStateAction<string>>;
}

const Play = (props: Props) => {

    return (
        <GradientBackground>
            <HeaderBack onPress={() => props.setPage("Main Menu")} />
            <PlayNavBar setPage={props.setPage}/>
        </GradientBackground>
    );
};

export default Play;


