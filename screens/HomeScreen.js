import React, { useState } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import colors from "../constants/color";
import SearchBar from "../components/SearchBar";

import { Ionicons } from "react-native-vector-icons";

function HomeScreen() {
  const [searchText, setSearchText] = useState("");

  return (
    <View style={styles.container}>
      <View style={styles["top-container-1"]}>
        {/*Search bar */}
        <SearchBar placeholder="Search groceries..." onSearch={setSearchText} />
        {/*Location */}
      </View>
      <View style={styles["top-container-2"]}>
        {/*Location */}

        <Text style={styles["location-text"]}>
          Choose a store for pickup or delivery |{" "}
          <Text
            style={{ fontFamily: "Poppins-Black", textTransform: "uppercase" }}>
            West
          </Text>
        </Text>
        <TouchableOpacity
          style={styles.iconContainer}
          //   onPress={() => setDropdownVisible(true)}
        >
          <Ionicons name="caret-down" size={24} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  "top-container-1": {
    height: 100,
    backgroundColor: colors.primary,

    justifyContent: "center",
  },
  "top-container-2": {
    height: 50,
    backgroundColor: "#6969BE",

    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  "location-text": {
    color: "#ffffff",
    fontSize: 12,
    marginLeft: 20,
    fontFamily: "Poppins-Bold",
    letterSpacing: 0.4,
  },
  iconContainer: {
    padding: 10,
  },
});

export default HomeScreen;
