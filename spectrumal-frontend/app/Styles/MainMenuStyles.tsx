import { StyleSheet } from "react-native";
import variables from "./Variables";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "space-between",
        alignItems: "center"
    },

    /*Header container */
    headerContainer: {
        height: "30%",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    headerText: {
        color: variables.colors.whiteText,
        fontSize: 56,
        fontWeight: '600',
        textAlign: "center",
        marginBottom: 40,
        textShadowColor: 'rgba(0, 0, 0, 0.5)',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 4,
        fontFamily: 'System',
    },

    /*Button container */
    buttonsOuterContainer: {
        justifyContent: "flex-end",
        alignItems: "center",
        display: "flex",
        width: "100%",
        height: "30%",
        marginBottom: 40,
    },
    buttonsContainer: {
        justifyContent: "space-around",
        alignItems: "center",
        display: "flex",
        width: "100%",
        height: "80%",
    },
})

export default styles