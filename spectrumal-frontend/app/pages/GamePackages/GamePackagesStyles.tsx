import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
   container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    gap: 40,
   },
   packageContainer: {
      flexDirection: "row",
      justifyContent: "flex-start"
   },
   leftContainer: {
      height: "100%",
      width: "50%",
   },
      rightContainer: {
      height: "100%",
      width: "50%",
      justifyContent: "flex-end",
      padding: 5
   },
})

export default styles