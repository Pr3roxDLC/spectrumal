import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",
    },
    joinGameContainer: {
        marginTop: 30,
        display: "flex",
        width: "80%",
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