import React from "react";
import { View, StyleSheet } from "react-native";
import SearchBar from "@/components/SearchBar";
import SearchCheckbox from "@/components/SearchCheckbox";

const Search: React.FC = () => {
  return (
    <View style={styles.container}>
      <SearchBar />
      <SearchCheckbox />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "flex-start",
    alignItems: "center",
  },
});

export default Search;
