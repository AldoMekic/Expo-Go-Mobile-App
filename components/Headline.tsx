import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";

const { width: screenWidth, height: screenHeight } = Dimensions.get("window");

const containerHeight = screenHeight / 2;

const Headline: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.upperDiv}>
        <Text style={styles.upperText}>Video placed here</Text>
      </View>
      <View style={styles.lowerDiv}>
        <Text style={styles.lowerText}>Title placed here</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: screenWidth,
    height: containerHeight,
  },
  upperDiv: {
    backgroundColor: "blue",
    width: "100%",
    height: (2 / 3) * containerHeight,
    justifyContent: "center",
    alignItems: "center",
  },
  lowerDiv: {
    backgroundColor: "orange",
    width: "100%",
    height: (1 / 3) * containerHeight,
    justifyContent: "center",
    alignItems: "center",
  },
  upperText: {
    color: "white",
    fontSize: 20,
  },
  lowerText: {
    color: "white",
    fontSize: 18,
  },
});

export default Headline;
