// src/components/HeaderIcon.js
import React from "react";
import { View, StyleSheet, Image } from "react-native";
import Logo from "../assets/logo.png";

const HeaderIcon = () => (
  <View style={{ marginRight: 15 }}>
    <Image source={Logo} style={styles.icon} resizeMode="contain" />
  </View>
);

const styles = StyleSheet.create({
  iconContainer: {
    marginRight: 15,
  },
  icon: {
    width: 94,
  },
});

export default HeaderIcon;
