import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';

const App = () => {
  const [inputValue, setInputValue] = useState('');
  const [message, setMessage] = useState('');
  const [randomNumber, setRandomNumber] = useState(null);

  const generateRandomNumber = () => {
    const number = Math.floor(Math.random() * 10) + 1; 
    setRandomNumber(number);
    setMessage('');
  };

  const checkNumber = () => {
    const userNumber = parseInt(inputValue, 10);
    if (userNumber === randomNumber) {
      setMessage('Parabéns! Você acertou o número!');
    } else {
      setMessage(`Errado! O número era ${randomNumber}.`);
    }
    setInputValue(''); 
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Digite um número entre 1 e 10"
        value={inputValue}
        onChangeText={setInputValue}
        keyboardType="numeric"
      />
      <Button title="Gerar Número" onPress={generateRandomNumber} />
      <Button title="Verificar" onPress={checkNumber} disabled={randomNumber === null} />
      {message ? <Text style={styles.result}>{message}</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
  },
  result: {
    marginTop: 20,
    fontSize: 16,
    color: 'blue',
  },
});

export default App;
