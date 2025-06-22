import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#fefefe',
        borderRadius: 50,
        paddingVertical: 10,
        paddingHorizontal: 40,
        borderWidth: 2,
        borderColor: 'rgb(206, 206, 206)',
        shadowColor: '#bcbcbc',
        shadowOffset: { width: -3, height: -3 },
        shadowOpacity: 0.5,
        shadowRadius: 10,
        elevation: 6,
    },
    buttonText: {
        fontSize: 25,
        color: '#141414',
        textAlign: 'center',
    }
})

export default styles