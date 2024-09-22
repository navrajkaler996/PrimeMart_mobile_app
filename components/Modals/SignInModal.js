import React, { useState } from "react";
import {
  Modal,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import Button from "../Button";
import modalStyles from "../styles/modalStyles";
import useUser from "../../hooks/useUser";

const SigninModal = ({ isVisible, onClose }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { userSignInHandler, userIsLoading, userData, userError } = useUser({
    type: "USER_SIGN_IN",
    method: "POST",
  });

  const handleSignIn = () => {
    if (email && password) {
      userSignInHandler(email, password);
    } else {
      alert("Please fill in both fields.");
    }
  };

  return (
    <Modal
      visible={isVisible}
      transparent={true}
      animationType="slide"
      onRequestClose={onClose}>
      <View style={modalStyles.modalContainer}>
        <View style={modalStyles.modalContent}>
          <Text style={modalStyles.modalTitle}>Sign in</Text>
          <TouchableOpacity style={modalStyles.closeButton} onPress={onClose}>
            <Text style={modalStyles.closeButtonText}>X</Text>
          </TouchableOpacity>

          <TextInput
            style={modalStyles.input}
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
          <TextInput
            style={modalStyles.input}
            placeholder="Password"
            secureTextEntry={true}
            value={password}
            onChangeText={setPassword}
          />
          <View style={modalStyles.buttonContainer}>
            <Button
              text={userIsLoading ? "Loading..." : "Submit"}
              onPress={handleSignIn}
            />
          </View>
          {userError && (
            <Text style={styles.errorText}>
              Sign-in failed. Please try again.
            </Text>
          )}
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  errorText: {
    color: "red",
    marginTop: 10,
    textAlign: "center",
  },
});

export default SigninModal;
