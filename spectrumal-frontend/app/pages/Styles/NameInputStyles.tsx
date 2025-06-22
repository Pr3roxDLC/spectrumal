import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#0E2841"
    },
    nameInputContainer: {
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        width: "100%",
        height: "40%"
    },
    whatIsYourName: {
        fontSize: 32,
        fontWeight: 600,
        color: "#fefefe"
    },
    nameInput: {
        width: "70%",
        padding: 18,
        fontSize: 30,
        borderRadius: 20,
        backgroundColor: "#fefefe"
    },
})

export default styles