import { StyleSheet } from "react-native";
import variables from "../../../assets/variables/Variables";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 24,
    },
    title: {
        fontSize: 32,
        fontWeight: '800',
        color: variables.colors.whiteText,
        marginBottom: 32,
        textAlign: 'center',
        width: "100%",
        textShadowColor: 'rgba(44, 43, 43, 0.5)',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 4,
    },
    messageContainer: {
        marginBottom: 40,
    },
    message: {
        fontSize: 18,
        color: variables.colors.whiteText,
        textAlign: 'center',
        marginVertical: 6,
        lineHeight: 26,
        textShadowColor: 'rgba(0, 0, 0, 0.5)',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 4,
    },
    countdown: {
        fontSize: 36,
        fontWeight: 'bold',
        color: variables.colors.whiteText,
        textAlign: 'center',
        marginTop: 40,
        textShadowColor: 'rgba(0, 0, 0, 0.5)',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 4,
    },
})

export default styles