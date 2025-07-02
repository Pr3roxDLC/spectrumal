import { StyleSheet } from "react-native";
import variables from "../../../assets/variables/Variables";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  howToPlayContainer: {
    paddingHorizontal: 20,
    paddingVertical: 20, 
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
mainTitle: {
   color: variables.colors.whiteText,
    fontSize: 30,
    textAlign: "left",
    marginTop: -30,
    marginBottom: 15,
    fontWeight: '800',
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 4,
    fontFamily: 'System',
},

  title: {
    color: variables.colors.whiteText,
    fontSize: 26,
    textAlign: "center",
    fontWeight: '700',
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 4,
    fontFamily: 'System',
  },
  subHeading: {
    color: variables.colors.whiteText,
    fontSize: 22,
    marginTop: 20,
    fontWeight: '600',
    textShadowColor: 'rgba(0, 0, 0, 0.4)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
    fontFamily: 'System',
  },
  text: {
    color: variables.colors.whiteText,
    fontSize: 18,
    marginTop: 10,
    fontWeight: '400',
    lineHeight: 26,
    textAlign: "left",
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 4,
    fontFamily: 'System',
  },
  bulletText: {
    color: variables.colors.whiteText,
    fontSize: 18,
    marginTop: 6,
    marginLeft: 20, 
    fontWeight: '400',
    lineHeight: 26,
    textAlign: "left",
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 4,
    fontFamily: 'System',
  },
  icon: {
    marginRight: 10,
    color: variables.colors.whiteText,
    fontSize: 34,
    paddingBottom: 2,
  }
});

export default styles
