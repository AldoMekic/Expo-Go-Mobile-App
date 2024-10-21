import React from "react";
import { View, StyleSheet, Dimensions } from "react-native";

const { width: screenWidth, height: screenHeight } = Dimensions.get("window");

const containerHeight = screenHeight / 2;

const ActorCategory: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={[styles.actorItem, { backgroundColor: "purple" }]} />
      <View style={[styles.actorItem, { backgroundColor: "orange" }]} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: screenWidth,
    height: containerHeight,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  actorItem: {
    flex: 1,
    height: "80%",
    marginHorizontal: 5,
    borderRadius: 10,
  },
});

export default ActorCategory;
