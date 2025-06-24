import { StyleSheet } from "react-native";

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
        color: "#0E2841",
        fontSize: 50,
        backgroundColor: "#fefefe",
        paddingVertical: 15,
        paddingHorizontal: 20,
        borderRadius: 15,
        letterSpacing: 5,
        fontWeight: 600
    },

    /*lobby component */

    lobbyComponentContainer: {
        width: "80%",
        height: "40%",
        backgroundColor: "#fefefe",
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
        color: "#0E2841",
        fontSize: 26,
        fontWeight: 600
    },
    usersInLobbyContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around"
    },
    userInLobby: {
        color: "#0E2841"
    },
    userAndName: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    userName: {
        paddingVertical: 10,
        fontSize: 17,
        color: "#0E2841",
    }
})

export default styles