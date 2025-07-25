import { StyleSheet } from "react-native";
import variables from "../../../assets/variables/Variables";

const styles2 = StyleSheet.create({
    giveClueContainer: {
        flex: 1,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
    },
    clueContainer: {
        width: "80%",
        height: "20%",
        justifyContent: "center",
        alignItems: "center"
    },
    giveAClue: {
        color: variables.colors.whiteText,
        fontSize: 28,
        fontWeight: '600',
        textAlign: "center",
        marginBottom: 20,
        textShadowColor: 'rgba(0, 0, 0, 0.5)',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 4,
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

export default styles2