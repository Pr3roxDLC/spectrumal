import { StyleSheet } from "react-native";
import variables from "./Variables";

const styles = StyleSheet.create({
    lobbyContainer: {
        width: "100%",
        height: "90%",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center"
    },

    /*game code */

    gameCodeContainer: {
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        width: "80%",
        height: "30%",
    },
    textContainer: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "30%",
    },
    thisIsYourGameCode: {
        color: "#fefefe",
        fontSize: 26,
        fontWeight: 600
    },
    gameCodeBox: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "60%",
    },
    gameCode: {
        color: variables.colors.whiteText,
        fontSize: 50,
        paddingVertical: 15,
        paddingHorizontal: 20,
        borderRadius: 15,
        letterSpacing: 5,
        fontWeight: 600
    },

    /*lobby component */

    lobbyComponentContainer: {
        width: "100%",
        height: "100%",
        paddingVertical: 10,
        borderRadius: 15
    },
    lobbyTitleContainer: {
        width: "100%",
        height: "30%",
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
    },
    lobbyTitle: {
        color: variables.colors.whiteText,
        fontSize: 26,
        fontWeight: 600
    },
    usersInLobbyContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around"
    },
    userAndName: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    userName: {
        paddingVertical: 10,
        fontSize: 17,
        color: variables.colors.whiteText,
    }
})

export default styles