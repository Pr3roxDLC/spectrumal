import { StyleSheet } from "react-native";
import variables from "../../Styles/Variables";

const styles = StyleSheet.create({

  buttonWrapper: {
    borderRadius: variables.colors.buttonBorderRadius,
    overflow: 'hidden',
    marginVertical: 12,
    alignSelf: 'center',
  },
  blurView: {
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: variables.colors.buttonBorderRadius,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.2)', 
    shadowColor: '#2C3E75', 
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.3,
    shadowRadius: 20,
  },
  buttonText: {
    color: variables.colors.whiteText, 
    fontWeight: '600',
    fontSize: 17,
    textAlign: 'center',
    textShadowColor: 'rgba(0,0,0,0.3)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 1,
  },
})

export default styles