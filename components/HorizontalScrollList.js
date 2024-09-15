import React from "react";
import { View, Text, FlatList, StyleSheet, Dimensions } from "react-native";
import SmallCard from "./SmallCard";

const HorizontalScrollList = () => {
  // Sample data
  const data = Array.from({ length: 10 }, (_, index) => ({
    id: index.toString(),
    title: `Item ${index + 1}`,
  }));

  const renderItem = ({ item }) => <SmallCard />;

  return (
    <View style={styles.container}>
      <Text style={styles["container-title"]}>Fresh food</Text>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.list}
      />
    </View>
  );
};

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
  },
  list: {
    paddingVertical: 10,
  },
  item: {
    backgroundColor: "#DDDDDD",
    padding: 20,
    marginHorizontal: 10,
    borderRadius: 8,
    width: width * 0.6, // Adjust width as needed
    alignItems: "center",
    justifyContent: "center",
  },
  itemText: {
    fontSize: 16,
    color: "#333",
  },
  "container-title": {
    marginLeft: 10,
    fontFamily: "Poppins-SemiBold",
    fontSize: 16,
    letterSpacing: 0.5,
  },
});

export default HorizontalScrollList;
