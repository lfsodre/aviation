import { View, Image } from 'react-native';
import tw from 'twrnc';

export function Poster() {
 return (
    <View className='w-full h-70 rounded-2xl mt-2 mb-2 gap-2 items-center justify-between flex-row '>
      
    {/*----BANNER 1----*/}
    <Image
      source={require("../../assets/cartaz3.jpg")}
      style={tw`w-50% h-90 rounded-2xl mb-2`}
      resizeMode="cover"
    />
    
    <View className='w-full h-70'>
    {/*----BANNER 2----*/}
        <Image
        source={require("../../assets/cartaz2.jpg")}
        style={tw`w-45% h-44 rounded-2xl mb-2`}
        resizeMode="cover"
        />

        {/*----BANNER 3----*/}
        <Image
        source={require("../../assets/cartaz2.jpg")}
        style={tw`w-45% h-44 rounded-2xl mb-2`}
        resizeMode="cover"
        />
    </View>

</View>
  );
}