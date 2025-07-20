import { StyleSheet } from "react-native";
import variables from "../../../assets/variables/Variables";

const styles = StyleSheet.create({
    lobbyContainer: {
        flex: 1,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
    },
    avatarContainer: {
        borderRadius: 25,
        width: 60,
        height: 60,
        borderWidth: 2,
        borderColor: variables.colors.whiteText,
        justifyContent: "center",
        alignItems: "center",
        shadowColor: 'rgba(0, 0, 0, 0.3)',
        shadowOffset: { width: 8, height: 8 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
        boxShadow: 'rgba(255, 255, 255, 0.3) 4px 4px 16px -8px inset',
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
        color: variables.colors.whiteText,
        fontSize: 26,
        fontWeight: '600',
        textAlign: "center",
        textShadowColor: 'rgba(0, 0, 0, 0.5)',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 4,
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
        paddingHorizontal: 10,
        borderRadius: 15,
        justifyContent: "flex-start",
        alignItems: "flex-start"
    },
    lobbyTitleContainer: {
        width: "100%",
        height: "20%",
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
    },
    lobbyTitle: {
        color: variables.colors.whiteText,
        fontSize: 17,
        fontWeight: '600',
        marginTop: 10,
        textShadowColor: 'rgba(0, 0, 0, 0.5)',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 4,
    },
    usersInLobbyContainer: {
        display: "flex",
        flexDirection: "row",
        width: "100%",
        flexWrap: "wrap",
        justifyContent: "flex-start"
    },
    userAndName: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "25%"
    },
    userName: {
        paddingVertical: 10,
        color: variables.colors.whiteText,
        fontSize: 17,
        fontWeight: '600',
        textAlign: "center",
        marginBottom: 20,
        textShadowColor: 'rgba(0, 0, 0, 0.5)',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 4,
    }
})

export default styles