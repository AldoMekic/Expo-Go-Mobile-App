import React from "react";
import { View, Text, StyleSheet } from "react-native";

const MoviePage: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.upperDiv}>
        <Text style={styles.title}>Movie Title</Text>
      </View>

      <View style={styles.middleDiv}>
        <Text style={styles.description}>
          This is a brief description of the movie. It provides an overview of
          the plot and key details.
        </Text>
        <Text style={styles.detail}>Release Date: January 1, 2024</Text>
        <Text style={styles.detail}>Director: John Doe</Text>
      </View>

      <View style={styles.lowerDiv}>
        <Text style={styles.footer}>This is the Movie Page</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    padding: 20,
  },
  upperDiv: {
    paddingVertical: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
  },
  middleDiv: {
    paddingVertical: 20,
    justifyContent: "center",
  },
  description: {
    fontSize: 16,
    marginBottom: 10,
  },
  detail: {
    fontSize: 16,
    color: "gray",
    marginBottom: 5,
  },
  lowerDiv: {
    paddingVertical: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  footer: {
    fontSize: 18,
    color: "gray",
  },
});

export default MoviePage;
