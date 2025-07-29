import { StyleSheet } from "react-native";
import variables from "../../../assets/variables/Variables";

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
      justifyContent: "space-around",
      paddingHorizontal: 5,
   },
   label: {
      color: variables.colors.whiteText,
      fontSize: 20,
      fontWeight: '600',
      textShadowColor: 'rgba(0, 0, 0, 0.5)',
      textShadowOffset: { width: 1, height: 1 },
      textShadowRadius: 4,
   },
   badge: {
      width: "60%",
      height: 24,
      justifyContent: "center",
      borderRadius: 10
   },
   badgeText: {
      textAlign: "center",
      color: variables.colors.whiteText,
      textShadowColor: 'rgba(0, 0, 0, 0.5)',
      textShadowOffset: { width: 1, height: 1 },
      textShadowRadius: 4,
   }
})

export default styles