import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Checkbox } from "react-native-paper";

const SearchCheckbox: React.FC = () => {
  const [isActionChecked, setActionChecked] = useState(false);
  const [isHorrorChecked, setHorrorChecked] = useState(false);
  const [isDramaChecked, setDramaChecked] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.checkboxContainer}>
        <Checkbox
          status={isActionChecked ? "checked" : "unchecked"}
          onPress={() => setActionChecked(!isActionChecked)}
        />
        <Text style={styles.label}>Action</Text>
      </View>

      <View style={styles.checkboxContainer}>
        <Checkbox
          status={isHorrorChecked ? "checked" : "unchecked"}
          onPress={() => setHorrorChecked(!isHorrorChecked)}
        />
        <Text style={styles.label}>Horror</Text>
      </View>

      <View style={styles.checkboxContainer}>
        <Checkbox
          status={isDramaChecked ? "checked" : "unchecked"}
          onPress={() => setDramaChecked(!isDramaChecked)}
        />
        <Text style={styles.label}>Drama</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 10,
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  label: {
    marginLeft: 8,
    fontSize: 16,
  },
});

export default SearchCheckbox;
