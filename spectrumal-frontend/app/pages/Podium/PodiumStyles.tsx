import { StyleSheet } from "react-native";
import variables from "../../../assets/variables/Variables";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    text: {
        color: variables.colors.whiteText,
        fontSize: 50,
        fontWeight: '600',
        textAlign: "center",
        marginTop: 30,
        textShadowColor: 'rgba(0, 0, 0, 0.5)',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 4,
        fontFamily: 'System',
    },
    podiumContainer: {
        height: '30%',
        width: '100%',
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginTop: 30,
        marginBottom: 30
    },
    podiumInnerContainer: {
        flexDirection: 'row',
        width: '80%',
        justifyContent: 'space-around',
        alignItems: 'flex-end',
        height: '100%',
    },
    singlePodiumContainer: {
        width: '33.333%',
        height: "40%",
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    avatar: {
        marginBottom: 6,
        width: 54,
        height: 54,
    },
    username: {
        color: variables.colors.whiteText,
        fontSize: 16,
        fontWeight: '600',
        textAlign: 'center',
        marginBottom: 10,
        textShadowColor: 'rgba(0, 0, 0, 0.5)',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 4,
        fontFamily: 'System',
    },
    number: {
        fontSize: 36,
        fontWeight: '700',
        color: '#fff',
        textAlign: 'center',
        textShadowColor: 'rgba(0,0,0,0.4)',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 3,
    },
    podiumBase: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    firstPodium: {
        height: '100%',
        backgroundColor: variables.colors.whiteText,
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
        shadowColor: '#000',
        shadowOpacity: 0.6,
        shadowOffset: { width: 0, height: 4 },
        shadowRadius: 8,
        elevation: 4,
    },
    secondPodium: {
        height: '75%',
        backgroundColor: variables.colors.whiteText,
        borderTopLeftRadius: 8,
        shadowColor: '#000',
        shadowOpacity: 0.6,
        shadowOffset: { width: 0, height: 4 },
        shadowRadius: 8,
        elevation: 4,
    },
    thirdPodium: {
        height: '50%',
        backgroundColor: variables.colors.whiteText,
        borderTopRightRadius: 8,
        shadowColor: '#000',
        shadowOpacity: 0.6,
        shadowOffset: { width: 0, height: 4 },
        shadowRadius: 8,
        elevation: 4,
    },
})

export default styles 