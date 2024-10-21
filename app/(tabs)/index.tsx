import React from "react";
import { View, ScrollView, Text, StyleSheet } from "react-native";
import Headline from "@/components/Headline";
import SearchBar from "@/components/SearchBar";
import News from "@/components/News";
import ActorCategory from "@/components/ActorCategory";
import TopPicksCategory from "@/components/TopPicksCategory";
import FanFavoriteCategory from "@/components/FanFavoriteCategory";
import BehindTheScenes from "@/components/BehindTheScenes";

const Home: React.FC = () => {
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <Text style={styles.text}>Welcome to the Home page</Text>
        <Headline />
        <SearchBar />
        <News />
        <ActorCategory />
        <TopPicksCategory />
        <FanFavoriteCategory />
        <BehindTheScenes />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 20,
  },
});

export default Home;
