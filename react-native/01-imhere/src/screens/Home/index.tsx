import { Text, TextInput, TouchableOpacity, View } from 'react-native';

import { styles } from './styles';

export default function Home() {
  function handleParticipantAdd() {
    console.log("Você clicou no botão de Adicionar!")
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Nome do evento
      </Text>

      <Text style={styles.text}>
        Sexta, 12 de Janeiro de 2024.
      </Text>

      <View style={styles.form}>
        <TextInput
          placeholder="Nome do participante"
          placeholderTextColor="#6B6B6B"
          style={styles.input}
        />

        <TouchableOpacity onPress={handleParticipantAdd} style={styles.button}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
    </View >
  );
}