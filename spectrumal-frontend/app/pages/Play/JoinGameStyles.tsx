import { StyleSheet } from "react-native";
import variables from "../../../assets/variables/Variables";

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",
    },
    joinGameContainer: {
        marginTop: 10,
        display: "flex",
        width: "80%",
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