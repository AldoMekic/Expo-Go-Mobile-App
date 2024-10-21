import React, { useState } from "react";
import { View, TextInput, StyleSheet } from "react-native";

const SearchBar: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Search for shows, movies, people..."
        placeholderTextColor="grey"
        value={searchQuery}
        onChangeText={setSearchQuery}
        autoCorrect={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: 10,
  },
  input: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    fontSize: 16,
    color: "black",
  },
});

export default SearchBar;
