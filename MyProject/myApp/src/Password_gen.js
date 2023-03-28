import React, { useState } from 'react';
import { View, Text, Button, TextInput } from 'react-native';

const PasswordGenerator = () => {
  const [password, setPassword] = useState('');
  const [length, setLength] = useState('8');
  const [difficulty, setDifficulty] = useState('medium');

  const generatePassword = () => {
    let result = '';
    const characters = {
      lowercase: 'abcdefghijklmnopqrstuvwxyz',
      uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
      numbers: '0123456789',
      symbols: '!@#$%^&*()_+-=[]{}|;:,.<>?'
    };
    let chars = '';
    switch (difficulty) {
      case 'easy':
        chars = characters.lowercase + characters.uppercase;
        break;
      case 'medium':
        chars = characters.lowercase + characters.uppercase + characters.numbers;
        break;
      case 'hard':
        chars = characters.lowercase + characters.uppercase + characters.numbers + characters.symbols;
        break;
      default:
        chars = characters.lowercase + characters.uppercase + characters.numbers;
    }
    for (let i = 0; i < parseInt(length); i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
  };

  const handleGeneratePassword = () => {
    const password = generatePassword();
    setPassword(password);
  };

  return (
    <View>
      <View>
        <Text>Length:</Text>
        <TextInput value={length} onChangeText={setLength} />
      </View>
      <View>
        <Text>Difficulty:</Text>
        <TextInput value={difficulty} onChangeText={setDifficulty} />
      </View>
      <Button title="Generate Password" onPress={handleGeneratePassword} />
      <Text>{password}</Text>
    </View>
  );
};

export default PasswordGenerator;
