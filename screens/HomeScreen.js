import React, { useState } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import colors from "../constants/color";
import SearchBar from "../components/SearchBar";

import { Ionicons } from "react-native-vector-icons";
import HorizontalScrollList from "../components/HorizontalScrollList";

function HomeScreen() {
  const [searchText, setSearchText] = useState("");
  const [dropdownVisible, setDropdownVisible] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles["top-container-1"]}>
        {/* <Text style={styles["heading-text"]}>
          Best retail stores in Winnipeg
        </Text> */}
        <View style={styles["location-container"]}>
          {/*Location */}

          <Text style={styles["location-text"]}>
            West Winnipeg |{" "}
            <Text style={{ textTransform: "uppercase" }}>RCJ 039</Text>
          </Text>

          <TouchableOpacity
            style={styles.iconContainer}
            onPress={() => setDropdownVisible((prev) => !prev)}>
            <Ionicons
              name={dropdownVisible ? "caret-up" : "caret-down"}
              size={24}
              color="white"
            />
          </TouchableOpacity>
        </View>

        {dropdownVisible && (
          <View style={styles["dropdow-container"]}>
            <View style={styles["dropdown-option-container"]}>
              <View style={styles["dropdown-option"]}>
                <Ionicons name="car-outline" size={30} color="#fff" />
                <Text style={styles["dropdown-option-text"]}>Pick up</Text>
              </View>
              <View style={styles["dropdown-option"]}>
                <Ionicons name="home-outline" size={30} color="#fff" />
                <Text style={styles["dropdown-option-text"]}>Delivery</Text>
              </View>
            </View>
          </View>
        )}
        {/*Search bar */}
        <View style={styles["searchbar-container"]}>
          <SearchBar
            placeholder="Search groceries..."
            onSearch={setSearchText}
          />
        </View>
        {/*Location */}
      </View>
      <View style={styles["navigation-bar"]}>
        <Text style={styles["navigation-bar-item"]}>Top deals</Text>
        <Text style={styles["navigation-bar-item"]}>Flyer</Text>
        <Text style={styles["navigation-bar-item"]}>Fresh food</Text>
        <Text style={styles["navigation-bar-item"]}>Snacks</Text>
        <Text style={styles["navigation-bar-item"]}>Seasonal</Text>
      </View>
      <View>
        <HorizontalScrollList />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  "top-container-1": {
    minHeight: 120,
    backgroundColor: colors.primary,
    // borderBottomLeftRadius: 40,
    // borderBottomRightRadius: 40,
  },
  "location-container": {
    height: 50,

    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },

  "dropdow-container": {},
  "dropdown-option-container": {
    flexDirection: "row",
    justifyContent: "center",
    gap: 20,
  },
  "dropdown-option": {
    width: 180,
    height: "auto",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: colors["primary-dark"],
    paddingTop: 10,
    paddingBottom: 10,
    marginTop: 15,
    marginBottom: 15,
    borderRadius: 10,
  },
  "searchbar-container": {
    marginBottom: 15,
  },
  "navigation-bar": {
    minHeight: 40,
    backgroundColor: colors["primary-dark"],
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  "navigation-bar-item": {
    fontFamily: "Poppins-Regular",
    color: "#fff",
    letterSpacing: 0.2,
  },
  "dropdown-option-info": {
    width: 410,
    backgroundColor: colors["primary-dark"],
    alignSelf: "center",
  },
  "dropdown-option-text": {
    fontSize: 16,
    color: "#fff",
    fontFamily: "Poppins-bold",
    marginTop: 8,
  },

  "location-text": {
    color: "#ffffff",
    fontSize: 12,
    marginLeft: 20,
    fontFamily: "Poppins-Black",
    letterSpacing: 0.5,
    textTransform: "capitalize",
  },
  "heading-text": {
    color: "#ffffff",
    fontSize: 20,
    marginLeft: 20,
    fontFamily: "Poppins-Black",
    letterSpacing: 1,
    marginTop: 5,
    marginBottom: 5,
    textTransform: "capitalize",
    color: "#6969BE",
  },
  iconContainer: {
    padding: 10,
  },
});

export default HomeScreen;
