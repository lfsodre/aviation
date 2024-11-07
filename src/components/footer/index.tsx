import { View, Text, Pressable } from 'react-native';
import { Ionicons, Feather } from '@expo/vector-icons';

export default function footer() {
 return (
    <View className="fixed top-0 left-0 right-0 w-full h-14 flex flex-row items-center justify-center gap-2 bg-gray-800">
      {/* LOGO */}
      <View className="h-10 w-72 flex flex-row items-center justify-right pl-3 ml-2">
        <Text className="text-2xl font-bold text-white">AVIATION BLOG</Text>
      </View>
      
      {/* BOTÃO NOTIFICAÇÕES */}
      <Pressable className="w-10 h-10 flex justify-center items-center">
        <Feather name="bell" size={30} color="#FFF" />
      </Pressable>
      
      {/* BOTÃO CHAT */}
      <Pressable className="w-10 h-10 flex justify-center items-center mr-2">
        <Ionicons name="chatbubble-ellipses-outline" size={30} color="#FFF" />
      </Pressable>
    </View>
  );
}