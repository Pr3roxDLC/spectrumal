import { StyleSheet } from "react-native";
import variables from "../../../assets/variables/Variables";

const styles = StyleSheet.create({
    waitingForOthersContainer: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        
    },
    title: {
        color: variables.colors.whiteText,
        fontSize: 26,
        fontWeight: '600',
        textAlign: "center",
        textShadowColor: 'rgba(0, 0, 0, 0.5)',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 4,
    },
})

export default styles