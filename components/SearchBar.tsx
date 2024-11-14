import React, { useState } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Text,
} from "react-native";
import { useRouter } from "expo-router"; // Ensure your project has expo-router

const SearchBar: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [showResults, setShowResults] = useState(false);
  const router = useRouter();

  const handleSelect = (option: string) => {
    if (option === "Movie") {
      router.push("/(tabs)/MoviePage");
    } else if (option === "Actor") {
      router.push("/(tabs)/ActorPage");
    }
    setShowResults(false);
    setSearchQuery("");
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Search for shows, movies, people..."
        placeholderTextColor="grey"
        value={searchQuery}
        onChangeText={(text) => {
          setSearchQuery(text);
          setShowResults(text.length > 0);
        }}
        autoCorrect={false}
      />
      {showResults && (
        <View style={styles.resultsContainer}>
          <TouchableOpacity
            onPress={() => handleSelect("Movie")}
            style={styles.resultItem}
          >
            <Text style={styles.resultText}>Movie</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => handleSelect("Actor")}
            style={styles.resultItem}
          >
            <Text style={styles.resultText}>Actor</Text>
          </TouchableOpacity>
        </View>
      )}
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
  resultsContainer: {
    backgroundColor: "white",
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 8,
    marginTop: 5,
  },
  resultItem: {
    padding: 10,
  },
  resultText: {
    fontSize: 16,
    color: "black",
  },
});

export default SearchBar;
