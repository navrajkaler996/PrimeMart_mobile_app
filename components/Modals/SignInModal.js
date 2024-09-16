import React from "react";
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

const SigninModal = ({ isVisible, onClose }) => {
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

          <TextInput style={modalStyles.input} placeholder="Email" />
          <TextInput
            style={modalStyles.input}
            placeholder="Password"
            secureTextEntry={true}
          />
          <View style={modalStyles.buttonContainer}>
            <Button text="Submit" />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default SigninModal;
