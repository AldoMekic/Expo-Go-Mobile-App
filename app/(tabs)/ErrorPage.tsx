import React from "react";
import { View, Text, StyleSheet } from "react-native";

const ErrorPage: React.FC<{ errorMessage: string }> = ({ errorMessage }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>There seems to have been an error</Text>
      <Text style={styles.message}>{errorMessage}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  message: {
    fontSize: 18,
    textAlign: "center",
  },
});

export default ErrorPage;
