import { StyleSheet } from 'react-native';
import variables from '../../../assets/variables/Variables';

const styles = StyleSheet.create({
  continueRoundContainer: {
    width: '100%',
    height: 100,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 20,
  },
  text: {
    color: variables.colors.whiteText,
    fontWeight: '600',
    fontSize: 25,
    textAlign: 'center',
    textShadowColor: 'rgba(0,0,0,0.3)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 1,
  },
  countdown: {
    color: variables.colors.whiteText,
    fontWeight: '600',
    fontSize: 35,
    textAlign: 'center',
    textShadowColor: 'rgba(0,0,0,0.3)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 1,
  },
  countContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 70,
    height: 70,
    borderWidth: 1,
    borderColor: variables.colors.whiteText,
    borderRadius: "50%", 
    backgroundColor: 'rgba(255, 255, 255, 0.05)', 
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 4, 
  },
});

export default styles;
