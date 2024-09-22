import React, { useState } from "react";
import { useFocusEffect } from "@react-navigation/core";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import jwt_decode, { jwtDecode } from "jwt-decode";

import Button from "../components/Button";
import Modal from "../components/Modals/SignInModal";
import SignupModal from "../components/Modals/SignUpModal";

import { getValueFor } from "../helper";
import colors from "../constants/color";

const AccountScreen = () => {
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  const [isSignInModalVisible, setIsSignInModalVisible] = useState(false);
  const [isSignUpModalVisible, setIsSignUpModalVisible] = useState(false);

  useFocusEffect(
    React.useCallback(() => {
      const checkForToken = async () => {
        const token = await getValueFor("token");

        if (token) {
          try {
            const decodedToken = jwtDecode(token);
            const currentTime = Date.now() / 1000;

            if (decodedToken.exp < currentTime) {
              setUserLoggedIn(false);
            } else {
              setUserLoggedIn(true);
            }
          } catch (error) {
            console.error("Error decoding token:", error);
            setUserLoggedIn(false);
          }
        } else {
          setUserLoggedIn(false);
        }
      };

      checkForToken();
    })
  );

  const handleSignInPress = () => {
    setIsSignInModalVisible(true);
  };

  const handleSignUpPress = () => {
    setIsSignUpModalVisible(true);
  };

  const handleSignInCloseModal = () => {
    setIsSignInModalVisible(false);
  };

  const handleSignUpCloseModal = () => {
    setIsSignUpModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles["top-container-1"]}>
        <Text style={styles["heading-text"]}>Account</Text>
      </View>
      {!userLoggedIn && (
        <View style={styles["btn-container"]}>
          <Button text="Sign in" onPress={handleSignInPress} />
          <Text>or</Text>
          <TouchableOpacity onPress={handleSignUpPress}>
            <Text style={styles["new-account-text"]}>Create a new account</Text>
          </TouchableOpacity>
        </View>
      )}

      {isSignInModalVisible && <Modal onClose={handleSignInCloseModal} />}
      {isSignUpModalVisible && <SignupModal onClose={handleSignUpCloseModal} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  "top-container-1": {
    minHeight: 100,
    backgroundColor: colors.primary,
    justifyContent: "center",
    alignItems: "center",
  },

  "heading-text": {
    color: "#ffffff",
    fontSize: 24,

    fontFamily: "Poppins-Black",
    letterSpacing: 1,
    textTransform: "uppercase",
  },
  "btn-container": {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
  },
  "new-account-text": {
    fontSize: 16,
    fontFamily: "Poppins-Regular",
    textDecorationLine: "underline",
  },
  modalContainer: {
    flex: 1,

    justifyContent: "flex-end",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    height: "70%",
    backgroundColor: "#fff",
    padding: 20,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  input: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  closeText: {
    color: "#007bff",
    marginTop: 10,
    textAlign: "center",
  },
});

export default AccountScreen;
