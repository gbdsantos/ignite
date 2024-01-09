import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',

    backgroundColor: '#1F1E25',
    borderRadius: 5,
    marginBottom: 12,
    width: '100%'
  },
  name: {
    flex: 1,
    color: '#FDFCFE',
    fontSize: 16,
    marginLeft: 16
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 56,
    width: 56,
    backgroundColor: '#E23C44',
    borderRadius: 5,
  },
  buttonText: {
    color: '#FDFCFE',
    fontSize: 24
  },
});