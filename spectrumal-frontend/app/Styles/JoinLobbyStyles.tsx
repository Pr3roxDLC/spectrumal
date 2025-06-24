import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#0E2841",
    },
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
        color: "#fefefe",
        fontSize: 30,
        textAlign: "center"
    },
    loading: {
        borderWidth: 3,
        borderColor: "#fff",
    }
})

export default styles