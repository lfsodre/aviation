import { View, Pressable, Text, Image } from 'react-native';
import tw from 'twrnc'; 

export function Banner() {
 return (
   <View className='w-full h-36 md:h-60 rounded-2xl mt-5'>
      
      {/*----BANNER 1----*/}
      <Pressable
        style={tw`w-full h-full rounded-2xl`}
        onPress={() => console.log("CLICOU NO BANNER 1")}
      >
        <Image
          source={require("../../assets/banner2.jpg")}
          style={tw`w-full h-full rounded-2xl`}
          resizeMode="cover"
        />
      </Pressable>
    
   </View>
  );
}

// O PAGEVIEW ESTAVA DANDO ERRO ENTÃO TIVEMOS QUE ADAPTAR O CODIGO

// BLIOTECA TWRNC -> npm install twrnc