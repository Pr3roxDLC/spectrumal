import React, { Dispatch, SetStateAction } from "react";
import PlayNavBar from "../Components/PlayComponents/PlayNavBar";
import HeaderBack from "../Components/GlobalComponents/HeaderBack";
import GradientBackground from "../Components/GlobalComponents/GradientBackground";


const Play = () => {

    return (
        <GradientBackground>
            <HeaderBack
            />
            <PlayNavBar />
        </GradientBackground>
    );
};

export default Play;


