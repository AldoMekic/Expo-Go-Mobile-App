import React from "react";
import { View, StyleSheet, Dimensions } from "react-native";

const { width: screenWidth, height: screenHeight } = Dimensions.get("window");

const containerHeight = screenHeight / 2;

const FanFavoriteCategory: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={[styles.fanFavoriteItem, { backgroundColor: "lime" }]} />
      <View style={[styles.fanFavoriteItem, { backgroundColor: "coral" }]} />
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
  fanFavoriteItem: {
    flex: 1,
    height: "80%",
    marginHorizontal: 5,
    borderRadius: 10,
  },
});

export default FanFavoriteCategory;
