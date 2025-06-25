import { StyleSheet } from "react-native";
import variables from "./Variables";

const styles = StyleSheet.create({
       settingsContainer: {
        height: "90%",
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center"
    },
    settingsOptionContainer: {
        paddingHorizontal: 20,
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row"
    },
    settingsOptionText: {
        color: variables.colors.whiteText,
        fontSize: 18
    }
})

export default styles