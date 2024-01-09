import { Text, TextInput, View } from 'react-native';

import { styles } from './styles';

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Nome do evento
      </Text>

      <Text style={styles.text}>
        Sexta, 12 de Janeiro de 2024.
      </Text>

      <TextInput
        placeholder="Nome do participante"
        placeholderTextColor="#6B6B6B"
        style={styles.input}
      />
    </View >
  );
}