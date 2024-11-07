import { View, Pressable, Text, Image } from 'react-native';
import tw from 'twrnc'; 

export function Follow() {
 return (
   <View className='w-full h-20 rounded-2xl mt-4 items-center flex-row justify-between'>
      
        {/*----FOLLOWER 1----*/}
        <Image
          source={require("../../assets/follower.jpg")}
          style={tw`w-20 h-20 rounded-full`}
          resizeMode="cover"
        />

        {/*----FOLLOWER 2----*/}
        <Image
          source={require("../../assets/follower.jpg")}
          style={tw`w-20 h-20 rounded-full`}
          resizeMode="cover"
        />

        {/*----FOLLOWER 3----*/}
        <Image
          source={require("../../assets/follower.jpg")}
          style={tw`w-20 h-20 rounded-full`}
          resizeMode="cover"
        />

        {/*----FOLLOWER 4----*/}
        <Image
          source={require("../../assets/follower.jpg")}
          style={tw`w-20 h-20 rounded-full`}
          resizeMode="cover"
        />
    
   </View>
  )

}