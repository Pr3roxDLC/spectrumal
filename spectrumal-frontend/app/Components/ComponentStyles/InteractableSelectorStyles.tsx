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
        left: 15,
        width: 270,
        height: 3,
        backgroundColor: variables.colors.whiteText,
        opacity: 0.3,
    },

    yAxisLine: {
        position: 'absolute',
        left: 150,
        top: 15,
        width: 3,
        height: 270,
        backgroundColor: variables.colors.whiteText,
        opacity: 0.3,
    },
    arrow: {
        position: 'absolute',
        width: 0,
        height: 0,
        borderStyle: 'solid',
    },

    leftArrow: {
        left: 5,
        top: 147,
        borderTopWidth: 5,
        borderBottomWidth: 5,
        borderRightWidth: 10,
        borderTopColor: 'transparent',
        borderBottomColor: 'transparent',
        borderRightColor: variables.colors.whiteText,
    },

    rightArrow: {
        right: 5,
        top: 147,
        borderTopWidth: 5,
        borderBottomWidth: 5,
        borderLeftWidth: 10,
        borderTopColor: 'transparent',
        borderBottomColor: 'transparent',
        borderLeftColor: variables.colors.whiteText,
    },

    topArrow: {
        top: 5,
        left: 147,
        borderLeftWidth: 5,
        borderRightWidth: 5,
        borderBottomWidth: 10,
        borderLeftColor: 'transparent',
        borderRightColor: 'transparent',
        borderBottomColor: variables.colors.whiteText,
    },

    bottomArrow: {
        bottom: 5,
        left: 147,
        borderLeftWidth: 5,
        borderRightWidth: 5,
        borderTopWidth: 10,
        borderLeftColor: 'transparent',
        borderRightColor: 'transparent',
        borderTopColor: variables.colors.whiteText,
    },

})

export default styles