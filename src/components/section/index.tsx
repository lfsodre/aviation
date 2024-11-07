import { View, Pressable, Text, Image } from 'react-native';

interface Props {
    name: string;
    size: "text-lg" | "text-xl" | "text-2xl";
    label: string;
    action: () => void;
}

export function Section({name, size, label, action}: Props) {
 return (
   <View className="w-full flex flex-row items-center justify-between px-2">
    <Text className={`${size} text-slate-200 mt-2 self-start`}>
        {name}
    </Text>

    <Pressable onPress={action}>
        <Text className='text-slate-200 pt-3'>{label}</Text>
    </Pressable>
   </View>
  );
}