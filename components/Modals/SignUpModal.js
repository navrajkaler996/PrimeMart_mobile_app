import React, { useState } from "react";
import {
  Modal,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from "react-native";
import Button from "../Button";
import modalStyles from "../styles/modalStyles";

const SignupModal = ({ isVisible, onClose }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleNameChange = (text) => setName(text);
  const handleEmailChange = (text) => setEmail(text);
  const handlePasswordChange = (text) => setPassword(text);

  const handleSubmit = () => {
    setName("");
    setEmail("");
    setPassword("");

    onClose();
  };

  return (
    <Modal
      visible={isVisible}
      transparent={true}
      animationType="slide"
      onRequestClose={onClose}>
      <View style={modalStyles.modalContainer}>
        <View style={modalStyles.modalContent}>
          <TouchableOpacity style={modalStyles.closeButton} onPress={onClose}>
            <Text style={modalStyles.closeButtonText}>X</Text>
          </TouchableOpacity>

          <Text style={modalStyles.modalTitle}>Create an account</Text>

          <TextInput
            style={modalStyles.input}
            placeholder="Name"
            value={name}
            onChangeText={handleNameChange}
          />
          <TextInput
            style={modalStyles.input}
            placeholder="Email"
            value={email}
            onChangeText={handleEmailChange}
          />
          <TextInput
            style={modalStyles.input}
            placeholder="Password"
            secureTextEntry={true}
            value={password}
            onChangeText={handlePasswordChange}
          />

          <View style={modalStyles.buttonContainer}>
            <Button text="Submit" onPress={handleSubmit} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default SignupModal;
