import { StyleSheet } from "react-native";
import variables from "../../../assets/variables/Variables";

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        marginBottom: 50,
    },

    text: {
        color: variables.colors.whiteText,
        fontSize: 27,
        fontWeight: '600',
        textAlign: "center",
        textShadowColor: 'rgba(0, 0, 0, 0.5)',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 4,
    }
})

export default styles