import { StyleSheet } from "react-native";
import variables from "../../Styles/Variables";

const styles = StyleSheet.create({
    headerContainer: {
        height: 80,
        width: "100%",
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
        paddingHorizontal: 8,
        marginBottom: 20,
    },
    backIcon: {
        color: variables.colors.whiteText
    },
    settingIcon: {
        color: variables.colors.whiteText
    }
})

export default styles