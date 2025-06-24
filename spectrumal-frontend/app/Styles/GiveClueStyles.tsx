import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#0E2841",
    },
    giveClueContainer: {
        height: "90%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
    },
    sliderContainer: {
        width: "80%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "40%",
        marginTop: 20,
        borderColor: "#fff",
        borderWidth: 2
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