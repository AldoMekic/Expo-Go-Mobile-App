import React from "react";
import { View, StyleSheet, Text } from "react-native";
import StarRating from "react-native-star-rating-widget";

const MovieRating: React.FC = () => {
  const ratings = [3, 1, 1, 1];
  const averageRating = Math.round(
    ratings.reduce((sum, rating) => sum + rating, 0) / ratings.length
  );

  return (
    <View style={styles.container}>
      <StarRating rating={averageRating} onChange={() => {}} />
      <Text>{averageRating}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
  },
});

export default MovieRating;
