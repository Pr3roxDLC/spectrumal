import { StyleSheet } from "react-native";
import variables from "./Variables";

const styles = StyleSheet.create({
    lobbyContainer: {
        width: "100%",
        height: "90%",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center"
    },
    waitingForHostContainer: {
        width: "80%",
        height: "40%",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center"
    },
    waitingForHostText: {
                color: variables.colors.whiteText,
        fontSize: 30,
        fontWeight: '600',
        textAlign: "center",
        marginBottom: 20,
        textShadowColor: 'rgba(0, 0, 0, 0.5)',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 4,
    },
})

export default styles