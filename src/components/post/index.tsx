import { View, Image } from 'react-native';
import tw from 'twrnc'; 

export function Post() {
 return (
   <View className='w-full h-70 rounded-2xl mt-2 mb-2 gap-2 items-center flex-col '>
      
        {/*----BANNER 1----*/}
        <Image
          source={require("../../assets/post1.jpg")}
          style={tw`w-full h-90 rounded-2xl mb-2`}
          resizeMode="cover"
        />
        

        {/*----BANNER 2----*/}
        <Image
          source={require("../../assets/post2.jpg")}
          style={tw`w-full h-90 rounded-2xl mb-2`}
          resizeMode="cover"
        />

        {/*----BANNER 3----*/}
        <Image
          source={require("../../assets/post3.jpg")}
          style={tw`w-full h-90 rounded-2xl mb-2`}
          resizeMode="cover"
        />
    
   </View>
  );
}