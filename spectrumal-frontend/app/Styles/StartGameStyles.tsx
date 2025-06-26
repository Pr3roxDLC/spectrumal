import { StyleSheet } from "react-native";
import variables from "./Variables";

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",
    },
    startGameContainer: {
        marginTop: 10,
        width: "80%",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
    },
    codeAndName: {
        color: variables.colors.whiteText,
        fontSize: 25,
        fontWeight: '600',
        textAlign: "center",
        marginBottom: 20,
        textShadowColor: 'rgba(0, 0, 0, 0.5)',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 4,
    },
})

export default styles