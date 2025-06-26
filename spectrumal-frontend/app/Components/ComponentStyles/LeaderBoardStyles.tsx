import { StyleSheet, Dimensions } from 'react-native';
import variables from '../../Styles/Variables';

const screenHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    marginTop: 35,
    width: 350,
    padding: 20,
  },
  title: {
    color: variables.colors.whiteText,
    fontWeight: '600',
    fontSize: 26,
    marginBottom: 20,
    textAlign: 'center',
  },
  scrollArea: {
    maxHeight: screenHeight * 0.27,
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
    width: 30,
    height: 30,
    resizeMode: 'contain',
    marginRight: 15,
  },
  name: {
    color: variables.colors.whiteText,
    fontWeight: '600',
    fontSize: 18,
    flex: 1,
  },
  score: {
    color: variables.colors.whiteText,
    fontSize: 16,
    fontWeight: 'bold',
  },
  fadeWrapper: {
    position: 'relative',
    maxHeight: screenHeight * 0.24,
    overflow: 'hidden',
  },
  bottomFade: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 20,
    zIndex: 1,
  },
});

export default styles;
