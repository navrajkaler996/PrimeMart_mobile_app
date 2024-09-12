import React from "react";
import { View, Text, StyleSheet } from "react-native";
import colors from "../constants/color";

function HomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles["top-container"]}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  "top-container": {
    height: 300,
    backgroundColor: colors.primary,
  },
});

export default HomeScreen;
