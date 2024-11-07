import { View, Image } from 'react-native';
import tw from 'twrnc'; 

export function Notice() {
 return (
   <View className='w-full h-70 rounded-2xl mt-2 mb-2 gap-2 items-center flex-row '>
      
        {/*----BANNER 1----*/}
        <Image
          source={require("../../assets/notice1.jpg")}
          style={tw`w-32% h-60 rounded-2xl`}
          resizeMode="cover"
        />

        {/*----BANNER 2----*/}
        <Image
          source={require("../../assets/notice2.jpg")}
          style={tw`w-32% h-60 rounded-2xl`}
          resizeMode="cover"
        />

        {/*----BANNER 3----*/}
        <Image
          source={require("../../assets/notice3.jpg")}
          style={tw`w-32% h-60 rounded-2xl`}
          resizeMode="cover"
        />
    
   </View>
  );
}