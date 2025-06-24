import { StyleSheet } from "react-native";
import variables from "../../Styles/Variables";

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: variables.colors.buttonBorderRadius,
        borderColor: 'rgba(255, 255, 255, 0.2)',
        borderWidth: 1,
        shadowColor: 'rgba(0, 0, 0, 0.3)',
        shadowOffset: { width: 8, height: 8 },
        shadowOpacity: 0.5,
        shadowRadius: 5,
    },
})

export default styles