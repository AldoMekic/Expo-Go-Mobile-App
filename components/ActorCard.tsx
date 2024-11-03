import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

const ActorCard: React.FC<{ color: string }> = ({ color }) => {
  const router = useRouter();

  return (
    <TouchableOpacity
      style={styles.cardContainer}
      onPress={() => router.push("/(tabs)/ActorPage")}
    >
      <View style={[styles.imagePlaceholder, { backgroundColor: color }]} />
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>Actor Name</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    flex: 1,
    height: "80%",
    marginHorizontal: 5,
    borderRadius: 10,
    overflow: "hidden",
  },
  imagePlaceholder: {
    flex: 4,
  },
  titleContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#333",
  },
  titleText: {
    color: "#fff",
    fontSize: 16,
  },
});

export default ActorCard;
