import { StyleSheet } from "react-native";
import variables from "../../../assets/variables/Variables";

const styles = StyleSheet.create({
    guessClueContainer: {
        flex: 1,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
    },
    textContainer: {
        width: "80%",
        height: 270,
        justifyContent: "space-between",
        alignItems: "center",
    },
    text: {
        color: variables.colors.whiteText,
        fontSize: 28,
        width: "100%",
        fontWeight: '600',
        textAlign: "left",
        marginBottom: 30,
        marginTop: 60,
        textShadowColor: 'rgba(0, 0, 0, 0.5)',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 4,
    },
    clue: {
        color: variables.colors.whiteText,
        fontSize: 25,
        fontWeight: '600',
        textAlign: "center",
        textShadowColor: 'rgba(0, 0, 0, 0.5)',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 4,
    }
})

export default styles