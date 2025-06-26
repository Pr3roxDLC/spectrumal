import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
flex: 1,
justifyContent: "space-between",
alignItems:  "center"   },

    /*Header container */
    headerContainer: {
        height: "30%",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    headerText: {
        fontSize: 56,
        fontWeight: '700',
        color: '#FFFFFF',
        marginBottom: 40,
        fontFamily: 'System',
    },

    /*Button container */
    buttonsOuterContainer: {
        justifyContent: "flex-end",
        alignItems: "center",
        display: "flex",
        width: "100%",
        height: "30%",
        marginBottom: 40,
    },
    buttonsContainer: {
        justifyContent: "space-around",
        alignItems: "center",
        display: "flex",
        width: "100%",
        height: "80%",
    },
})

export default styles