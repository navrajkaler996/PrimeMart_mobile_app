import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import colors from "../constants/color";
import { shadows } from "../constants/styles";

const Button = ({ text, onPress, style }) => {
  return (
    <TouchableOpacity
      style={[styles.button, style, shadows["shadow-1"]]}
      onPress={onPress}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    padding: 10,
    borderRadius: 20,
    alignItems: "center",
    width: 100,
  },
  text: {
    color: "#fff",
    fontSize: 16,
    fontFamily: "Poppins-SemiBold",
    letterSpacing: 0.3,
  },
});

export default Button;
