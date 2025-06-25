import { StyleSheet } from "react-native";
import variables from "../../Styles/Variables";

const styles = StyleSheet.create({
    touchableView: {
        width: 300,
        height: 300,
        backgroundColor: '#00000000', // Transparent background
        justifyContent: 'center',
        alignItems: 'center',
    },
    rightXaxisText: {
        position: 'absolute',
        top: 140,
        right: -45,
        fontSize: 15,
        color: variables.colors.whiteText,
        textAlign: "center",
    },
    leftXaxisText: {
        position: 'absolute',
        top: 140,
        left: -30,
        fontSize: 15,
        color: variables.colors.whiteText,
        textAlign: "center",
    },
    topYaxisText: {
        position: 'absolute',
        top: -30,
        left: 100,
        fontSize: 15,
        color: variables.colors.whiteText,
        textAlign: "center",
        width: 100,
    },

    bottomYaxisText: {
        position: 'absolute',
        bottom: -30,
        left: 100,
        fontSize: 15,
        color: variables.colors.whiteText,
        width: 100,
        textAlign: "center",
    },

    xAxisLine: {
        position: 'absolute',
        top: 150,
        left: 0,
        width: 300,
        height: 3,
        backgroundColor: variables.colors.whiteText,
        opacity: 0.3,
    },

    yAxisLine: {
        position: 'absolute',
        left: 150,
        top: 0,
        width: 3,
        height: 300,
        backgroundColor: variables.colors.whiteText,
        opacity: 0.3,
    },
})

export default styles