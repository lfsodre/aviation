import { View, Pressable, Text, Image } from 'react-native';
import tw from 'twrnc'; 

export function Post() {
 return (
   <View className='w-full h-70 rounded-2xl mt-4 mb-4 gap-2 items-center flex-row '>
      
        {/*----BANNER 1----*/}
        <Image
          source={require("../../assets/post1.jpg")}
          style={tw`w-32% h-70 rounded-2xl`}
          resizeMode="cover"
        />

        {/*----BANNER 2----*/}
        <Image
          source={require("../../assets/post2.jpg")}
          style={tw`w-32% h-70 rounded-2xl`}
          resizeMode="cover"
        />

        {/*----BANNER 3----*/}
        <Image
          source={require("../../assets/post3.jpg")}
          style={tw`w-32% h-70 rounded-2xl`}
          resizeMode="cover"
        />
    
   </View>
  );
}