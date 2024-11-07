import React from 'react';
import { View, Text, Button } from 'react-native';

type Props = {
  navigation: any;
};

const Home = ({ navigation }: Props) => {
  return (
    <View className="flex-1 justify-center items-center bg-gray-950">
      <Text className="text-white text-2xl mb-4">Welcome to Home!</Text>
      <Button title="Go to Login" onPress={() => navigation.navigate('Login')} />
    </View>
  );
};

export default Home;
