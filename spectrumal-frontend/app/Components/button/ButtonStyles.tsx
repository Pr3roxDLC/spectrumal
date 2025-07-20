import { StyleSheet } from "react-native";
import variables from "../../../assets/variables/Variables";

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

  /*disabled styles */

    disabledContainer: {
    backgroundColor: '#d3d3d3', 
    opacity: 0.5,
  },
  disabledText: {
    color: '#999',
  },
})

export default styles