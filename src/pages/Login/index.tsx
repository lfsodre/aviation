import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';

type Props = {
  navigation: any;
};

const Login = ({ navigation }: Props) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Lógica de autenticação aqui
    navigation.navigate('Home');
  };

  return (
    <View className="flex-1 justify-center items-center bg-gray-950">
      <TextInput
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
        className="w-64 p-2 mb-4 bg-white rounded"
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        className="w-64 p-2 mb-4 bg-white rounded"
      />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
};

export default Login;
