import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    giveClueContainer: {
        height: "90%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
    },
    clueContainer: {
        width: "80%",
        height: "40%",
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "flex-start"
    },
    giveAClue: {
        color: "#fefefe",
        fontSize: 30,
        marginBottom: 30
    },
    clueInput: {
        width: "100%",
        height: 40,
        backgroundColor: "#fefefe",
        borderRadius: 15,
        fontSize: 22,
        paddingLeft: 10
    }
})

export default styles