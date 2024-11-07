import { View, Text, TextInput } from 'react-native';

export function Input() {
 return (
    <View className='bg-gray-950 w-full h-50 mb-4 border-slate-500 border-2 rounded-2xl'>

        <View className='h-10 w-72 flex flex-row items-center justify-right pl-3 ml-2'>
            <Text className='text-2xl font-bold text-white'>AVIATION BLOG</Text>
        </View>

        {/*----LOGIN INPUT----*/}
        <View className='w-full h-16 mb-2'>
            <Text className='text-slate-400 text-xl pl-3'>User:</Text>
            <TextInput
                className='w-70 h-20 mx-2 pl-3 text-slate-200 text-xl items-center border-slate-500 border-2 rounded-full'
                placeholder='luis.sodre'
                placeholderTextColor="#FFF"
            />
        </View>
        
        {/*----PASSWORD INPUT----*/}
        <View className='w-full h-16 mb-2'>
            <Text className='text-slate-400 text-xl pl-3'>Password:</Text>
            <TextInput
                className='w-70 h-20 mx-2 pl-3 text-slate-200 text-xl items-center border-slate-500 border-2 rounded-full'
                placeholder='password'
                placeholderTextColor="#FFF"
                secureTextEntry
            />
        </View>

   </View>
  );
}