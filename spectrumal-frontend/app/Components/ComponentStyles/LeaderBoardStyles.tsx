import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
container: {
    margin: 20,
    width: 350,
    backgroundColor: '#1B2C56',
    borderRadius: 20,
    padding: 20,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: '#ffffff',
    marginBottom: 15,
    textAlign: 'center',
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderRadius: 15,
    marginBottom: 10,
  },
  rank: {
    color: '#FFD700',
    fontSize: 18,
    width: 40,
    fontWeight: 'bold',
  },
  avatar: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
    marginRight: 15,
  },
  name: {
    color: '#ffffff',
    fontSize: 18,
    flex: 1,
  },
  score: {
    color: '#76FF03',
    fontSize: 16,
    fontWeight: 'bold',
  },
})

export default styles