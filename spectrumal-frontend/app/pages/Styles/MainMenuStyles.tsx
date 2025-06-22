import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    mainMenuContainer: {
        flex: 1,
        backgroundColor: "#0E2841",
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center"
    },

    /*Header container */
    headerContainer: {
        height: "20%",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    headerText: {
        color: "#fefefe",
        fontSize: 65,
    },

    /*Button container */
    buttonsOuterContainer: {
        justifyContent: "flex-end",
        alignItems: "center",
        display: "flex",
        width: "100%",
        height: "30%",
        marginBottom: 40
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