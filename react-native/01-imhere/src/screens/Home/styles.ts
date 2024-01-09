import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#131016',
    padding: 24
  },
  title: {
    color: '#FDFCFE',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 48
  },
  text: {
    color: '#6B6B6B',
    fontSize: 16,
  },
  input: {
    flex: 1,
    backgroundColor: '#1F1E25',
    borderRadius: 5,
    color: '#FDFCFE',
    height: 56,
    marginRight: 12,
    padding: 16
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 56,
    width: 56,
    backgroundColor: '#31CF67',
    borderRadius: 5,
  },
  buttonText: {
    color: '#FDFCFE',
    fontSize: 24
  },
  form: {
    flexDirection: "row",
    marginTop: 36,
    marginBottom: 42,
    width: '100%'
  }
});
