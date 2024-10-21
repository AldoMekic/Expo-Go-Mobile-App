import React from "react";
import { View, StyleSheet, Dimensions } from "react-native";

const { width: screenWidth, height: screenHeight } = Dimensions.get("window");

const containerHeight = screenHeight / 2;

const BehindTheScenes: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={[styles.btsItem, { backgroundColor: "lightgreen" }]} />
      <View style={[styles.btsItem, { backgroundColor: "lavender" }]} />
      <View style={[styles.btsItem, { backgroundColor: "peachpuff" }]} />
      <View style={[styles.btsItem, { backgroundColor: "lightcoral" }]} />
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
  btsItem: {
    flex: 1,
    height: "80%",
    marginHorizontal: 5,
    borderRadius: 10,
  },
});

export default BehindTheScenes;
