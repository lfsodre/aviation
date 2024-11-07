import { View, Text, Pressable, Image } from 'react-native';
import { Ionicons, Feather } from '@expo/vector-icons';
import tw from 'twrnc'; 

export function Footer() {
 return (
    <View className="flex flex-row justify-between gap-2 mb-2">
      
        {/* BOTÃO HOME */}
        <Pressable className="w-10 h-10 flex justify-center items-center">
            <Image
                source={require("../../assets/ico/w_home.png")}
                style={tw`w-full h-full`}
                resizeMode="cover"/>
        </Pressable>

        {/* BOTÃO SEARCH */}
        <Pressable className="w-10 h-10 flex justify-center items-center">
            <Image
                source={require("../../assets/ico/w_search.png")}
                style={tw`w-full h-full`}
                resizeMode="cover"/>
        </Pressable>

        {/* BOTÃO ADD */}
        <Pressable className="w-10 h-10 flex justify-center items-center">
            <Image
                source={require("../../assets/ico/w_add.png")}
                style={tw`w-full h-full`}
                resizeMode="cover"/>
        </Pressable>

        {/* BOTÃO EXIT */}
        <Pressable className="w-10 h-10 flex justify-center items-center">
            <Image
                source={require("../../assets/ico/w_exit.png")}
                style={tw`w-full h-full`}
                resizeMode="cover"/>
        </Pressable>

        {/* BOTÃO USER */}
        <Pressable className="w-10 h-10 flex justify-center items-center">
            <Image
                source={require("../../assets/ico/w_user.png")}
                style={tw`w-full h-full`}
                resizeMode="cover"/>
        </Pressable>
    </View>
  );
}