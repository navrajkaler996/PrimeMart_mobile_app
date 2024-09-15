// src/components/SmallCard.js
import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import Milk from "../assets/images/beatrice-milk-jug-1.webp";
import colors from "../constants/color";
import { shadows } from "../constants/styles";

const SmallCard = ({ imageUri, title, description }) => {
  return (
    <View style={{ ...styles.card }}>
      <Image source={Milk} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.price}>$6.54</Text>
        <Text style={styles.title}>beatrice milk 2% </Text>
        <Text style={styles.description}>A 4L jug of 2% beatrice milk.</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: "column",
    alignItems: "center",
    width: 140,
    backgroundColor: "#fff",
    borderRadius: 8,

    margin: 10,
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: "cover",
    marginTop: 10,
  },
  textContainer: {
    padding: 10,
  },
  price: {
    fontSize: 16,
    marginBottom: 2,
    fontFamily: "Poppins-Bold",
    color: colors["primary-dark"],
  },
  title: {
    fontSize: 12,
    fontWeight: "bold",
    marginBottom: 2,
    fontFamily: "Poppins-SemiBold",
  },
  description: {
    fontSize: 12,
    color: "#666",
    fontFamily: "Poppins-Regular",
  },
});

export default SmallCard;
