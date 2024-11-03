import React from "react";
import { View, ScrollView, Text, StyleSheet } from "react-native";
import MovieCategory from "@/components/MovieCategory";

const ActorPage: React.FC = () => {
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.upperDiv}>
        <Text style={styles.title}>Actor Name</Text>
        <Text style={styles.detail}>Date of Birth: January 1, 1970</Text>
        <Text style={styles.detail}>Birthplace: City, Country</Text>
        <Text style={styles.detail}>Date of Death: April 15, 2023</Text>
      </View>

      <View style={styles.middleDiv}>
        <Text style={styles.biographyTitle}>Biography</Text>
        <Text style={styles.biography}>
          This is a brief biography of the actor, highlighting key aspects of
          their life, career, and achievements.
        </Text>
      </View>

      <View style={styles.movieCategory}>
        <MovieCategory />
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
  detail: {
    fontSize: 16,
    color: "gray",
    marginBottom: 5,
  },
  middleDiv: {
    paddingVertical: 20,
  },
  biographyTitle: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
  },
  biography: {
    fontSize: 16,
    color: "gray",
  },
  movieCategory: {
    marginTop: 20,
  },
});

export default ActorPage;
