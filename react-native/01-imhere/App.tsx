import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Nome do evento
      </Text>

      <Text style={styles.text}>
        Sexta, 12 de Janeiro de 2024.
      </Text>
    </View >
  );
}

const styles = StyleSheet.create({
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
  }
});
