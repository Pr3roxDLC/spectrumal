import { StyleSheet } from "react-native";
import variables from "../../Styles/Variables";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20,
    width: 350,
    padding: 20,

  },
  title: {
    color: variables.colors.whiteText,
    fontWeight: '600',
    fontSize: 26,
    marginBottom: 20,
    textAlign: 'center',
    textShadowColor: 'rgba(0,0,0,0.3)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 1,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderRadius: 15,
    marginBottom: 10,
  },
  rank: {
    color: variables.colors.whiteText,
    fontSize: 18,
    width: 40,
    fontWeight: 'bold',
  },
  avatar: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
    marginRight: 15,
  },
  name: {
    color: variables.colors.whiteText,
    fontWeight: '600',
    fontSize: 18,
    textShadowColor: 'rgba(0,0,0,0.3)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 1,
    flex: 1,
  },
  score: {
    color: variables.colors.whiteText,
    fontSize: 16,
    fontWeight: 'bold',
  },
})

export default styles