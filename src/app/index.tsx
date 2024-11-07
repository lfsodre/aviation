import { Text, View, ScrollView } from "react-native";

import Constants from "expo-constants";

import { Post } from "../components/post";
import { Space } from "../components/space";
import { Input } from "../components/input";
import { Header } from "../components/header";
import { Banner } from "../components/banner";
import { Search } from "../components/search";
import { Follow } from "../components/follow";
import { Footer } from "../components/footer";
import { Notice } from "../components/notice";
import { Poster } from "../components/poster";
import { Section } from "../components/section";

const statusBarHeight = Constants.statusBarHeight

export default function Index() {
  return (
    <ScrollView 
      style={{flex: 1}}
      className="bg-gray-950" 
      showsVerticalScrollIndicator={false}
    >
      <View className="w-full px-4" style={{ marginTop: statusBarHeight + 10 }}>
        <Header/>
        <Banner/>
        <Follow/>
        <Section
          name="Noticias do momento"
          label="Veja mais"
          size="text-lg"
          action={ () => console.log("CLICOU NO VEJA MAIS") }
        />
        <Notice/>
        <Search/>
        <Space/>
        <Input/>
        <Space/>

        <Header/>
        <Post/>
        <Footer/>

        <Space/>
        <Header/>
        <Poster/>
      </View>
    </ScrollView>
  )
}

{/*----npx expo start----*/}