import React, { useState } from 'react';
import {
  Alert,
  FlatList,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';

import { Participant } from '../../components/Participant';

import { styles } from './styles';

export default function Home() {
  const [participants, setParticipants] = useState(['João']);

  function handleParticipantAdd() {
    if (participants.includes('Guilherme')) {
      return Alert.alert(
        'Participante existe',
        'Já existe um participante na lista com esse nome.'
      );
    }

    setParticipants(prevState => [...prevState, 'Ana']);
  }

  function handleParticipantRemove(name: string) {
    Alert.alert(
      'Remover participante',
      `Deseja remover o participante ${name} da lista?`,
      [
        {
          text: 'Não',
          style: 'cancel'
        },
        {
          text: 'Sim',
          onPress: () => Alert.alert("Apagado!")
        }
      ]
    );
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

      <FlatList
        data={participants}
        keyExtractor={item => item}
        ListEmptyComponent={() => (
          <Text style={styles.emptyList}>
            Ninguém chegou no evento ainda? Adicione participantes a sua lista de presença.
          </Text>
        )}
        renderItem={({ item }) => (
          <Participant
            key={item}
            name={item}
            onRemove={() => handleParticipantRemove(item)}
          />
        )}
        showsVerticalScrollIndicator={false}
      />
    </View >
  );
}