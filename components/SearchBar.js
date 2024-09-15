import React from "react";
import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Text,
} from "react-native";
import { Ionicons } from "react-native-vector-icons";

const SearchBar = ({ placeholder = "Search...", onSearch }) => {
  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <Ionicons name="search" size={20} color="#888" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder={placeholder}
          placeholderTextColor="#888"
          onChangeText={(text) => onSearch(text)}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",

    margin: 10,
  },
  searchContainer: {
    flex: 0.8,
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 20,
    padding: 5,
    backgroundColor: "#fff",
  },
  icon: {
    marginLeft: 10,
  },
  input: {
    flex: 1,
    marginLeft: 10,
    fontSize: 14,
  },
  button: {
    marginLeft: 10,
    padding: 10,
    borderRadius: 5,
    backgroundColor: "#007BFF",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});

export default SearchBar;
