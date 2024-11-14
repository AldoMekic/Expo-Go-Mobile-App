import React from "react";
import { View, ScrollView, Text, StyleSheet } from "react-native";
import ActorCategory from "@/components/ActorCategory";
import MovieRating from "@/components/MovieRating";

const MoviePage: React.FC = () => {
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.upperDiv}>
        <Text style={styles.title}>Movie Title</Text>
        <View style={styles.detailRow}>
          <Text style={styles.detail}>Year of Release: 2024</Text>
          <Text style={styles.detail}>Runtime: 120 minutes</Text>
        </View>
      </View>

      <MovieRating />

      <View style={styles.middleDiv}>
        <Text style={styles.description}>
          This is a brief description of the movie. It provides an overview of
          the plot and key details.
        </Text>
        <Text style={styles.detail}>Rating: PG-13</Text>
        <Text style={styles.detail}>Director: John Doe</Text>
      </View>

      <View style={styles.lowerDiv}>
        <Text style={styles.detail}>Writer: Jane Smith</Text>
        <Text style={styles.detail}>Composer: Alex Brown</Text>
      </View>

      <View style={styles.actorCategory}>
        <ActorCategory />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    padding: 20,
  },
  upperDiv: {
    paddingVertical: 20,
    alignItems: "flex-start",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 10,
  },
  detailRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  detail: {
    fontSize: 16,
    color: "gray",
    marginRight: 10,
  },
  middleDiv: {
    paddingVertical: 20,
  },
  description: {
    fontSize: 16,
    marginBottom: 10,
  },
  lowerDiv: {
    paddingVertical: 20,
    alignItems: "center",
  },
  actorCategory: {
    marginTop: 20,
  },
});

export default MoviePage;
