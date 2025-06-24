import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
/*navbar */

  navBarContainer: {
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center",
        marginTop: 10,
    },
    navBar: {
        flexDirection: "row",
        flexWrap: "wrap",
        width: "100%",
        justifyContent: "center",
        paddingVertical: 10,
    },
    navItem: {
        width: "50%",
        paddingVertical: 10,
        alignItems: "center",
    },
    navText: {
        fontSize: 20,
        color: "#bbb",
        fontWeight: "500",
    },
    activeNavItem: {
        position: "relative",
    },
    activeNavText: {
        fontWeight: "bold",
        color: "#fefefe",
    },
    activeIndicator: {
        width: 40,
        height: 3,
        backgroundColor: "#fefefe",
        position: "absolute",
        bottom: -2,
    },


})

export default styles