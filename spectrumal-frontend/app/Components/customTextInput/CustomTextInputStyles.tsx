import { StyleSheet } from "react-native";
import variables from "../../../assets/variables/Variables";

const styles = StyleSheet.create({
container: {
    width: "100%",
    alignSelf: 'center',
    marginVertical: 12,
    borderRadius: 25,
    overflow: 'hidden',
  },
  blurContainer: {
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderColor: 'rgba(255, 255, 255, 0.18)', 
    shadowColor: '#2C3E75',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.25,
    shadowRadius: 15,
    height: "100%",
    width: "100%"
  },
 compactBlurContainer: {
  paddingVertical: 0,
  paddingHorizontal: 0,
  justifyContent: 'center',
  alignItems: 'center',
},
compactInput: {
  fontSize: 32,        
  textAlign: 'center',
  height: '100%',
  width: '100%',
  color: variables.colors.whiteText,
},
  input: {
    color: variables.colors.whiteText,
    fontSize: 20,
    padding: 0, 
    height: "100%",
    width: "100%"
  },
})

export default styles