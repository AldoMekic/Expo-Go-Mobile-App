import React from "react";
import { View, Text, StyleSheet } from "react-native";
import MovieCategory from "@/components/MovieCategory";

const AccountPage: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.usernameContainer}>
        <Text style={styles.usernameText}>Username: DefaultUser</Text>
      </View>
      <View style={styles.movieCategoryContainer}>
        <MovieCategory />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  usernameContainer: {
    marginBottom: 20,
    alignItems: "center",
  },
  usernameText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  movieCategoryContainer: {
    flex: 1,
  },
});

export default AccountPage;
