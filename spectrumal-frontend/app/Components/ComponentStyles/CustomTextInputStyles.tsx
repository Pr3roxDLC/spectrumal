import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
container: {
    width: "100%",
    alignSelf: 'center',
    marginVertical: 12,
    borderRadius: 25,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.18)', 
  },
  blurContainer: {
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 25,
    borderColor: 'rgba(255, 255, 255, 0.18)', 
    shadowColor: '#2C3E75',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.25,
    shadowRadius: 15,
  },
  input: {
    color: '#E0E7FF',
    fontSize: 20,
    padding: 0, 
  },
})

export default styles