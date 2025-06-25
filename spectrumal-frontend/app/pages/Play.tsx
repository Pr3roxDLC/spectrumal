import React, { Dispatch, SetStateAction } from "react";
import PlayNavBar from "../Components/PlayComponents/PlayNavBar";
import HeaderBack from "../Components/GlobalComponents/HeaderBack";
import GradientBackground from "../Components/GlobalComponents/GradientBackground";
export interface Props {
    setPage: Dispatch<SetStateAction<string>>;
    setPreviousPage: Dispatch<SetStateAction<string | null>>
}

const Play = (props: Props) => {

    return (
        <GradientBackground>
            <HeaderBack
                goToSettings={() => {
                    props.setPreviousPage("Play");
                    props.setPage("Settings");
                }}
                onPress={() => props.setPage("Main Menu")}
            />
            <PlayNavBar setPreviousPage={props.setPreviousPage} setPage={props.setPage} />
        </GradientBackground>
    );
};

export default Play;


