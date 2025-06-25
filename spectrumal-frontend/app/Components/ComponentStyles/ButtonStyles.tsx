import { StyleSheet } from "react-native";
import variables from "../../Styles/Variables";

const styles = StyleSheet.create({

  container: {
    borderRadius: variables.colors.buttonBorderRadius,
    marginVertical: 12,
    alignSelf: 'center',
    height: 50
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