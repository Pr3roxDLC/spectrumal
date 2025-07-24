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
        errorText: {
        color: "#ed4040",
        fontSize: 14,
        textAlign: "center",
        textShadowColor: 'rgba(0, 0, 0, 0.5)',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 4,
    },
    codeInputContainer: {
        flexDirection: "row",
        alignItems: "center",
        gap: 3,
        width: "100%",
        height: 100,
        marginBottom: 20,
    },
        glass: {
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        fontSize: 30,
        color: variables.colors.whiteText,
        textAlign: 'center',
        width: '100%',
        height: '100%',
        fontWeight: 600,
        textShadowColor: 'rgba(0, 0, 0, 0.5)',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 4,
    },
})

export default styles