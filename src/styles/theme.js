import { StyleSheet } from 'react-native';

export const commonStyles = StyleSheet.create({
container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },

  title: {
    fontSize: 28,
    fontWeight: '700',
    marginBottom: 30,
  },

  input: {
    borderWidth: 1,
    color: '#000',
    borderColor: '#ddd',
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 14,
    marginBottom: 16,
  },

  button: {
    backgroundColor: '#111',
    paddingVertical: 16,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
  },

  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },

  image: {
    width: 120, 
    height: 120, 
    margin: 5
  },

  card: {
    width: 130,
    margin: 5,
  },

   imageText: {
    marginTop: 8,
    color: 'black',
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    fontSize: 10,
    fontWeight: '400',
    textAlign: 'center',
  },
});