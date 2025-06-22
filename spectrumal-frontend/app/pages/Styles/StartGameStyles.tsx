import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
        container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#0E2841"
    },
    startGameContainer: {
        marginTop: 30,
        width: "80%",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
    },
    codeAndName: {
        color: "#fefefe",
        fontSize: 25,
        marginBottom: 20,
        fontWeight: 600
    },
    textInput: {
        width: "100%",
        height: 50,
        backgroundColor: "#fefefe",
        marginBottom: 30,
        borderRadius: 10,
        fontSize: 22,
        paddingLeft: 10
    }
})

export default styles