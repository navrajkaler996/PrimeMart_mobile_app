import { StyleSheet } from "react-native";
import colors from "../../constants/color";

const modalStyles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    paddingTop: 70,
    backgroundColor: "#fff",
    padding: 20,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    height: "90%",
    position: "relative",
  },
  modalTitle: {
    fontSize: 24,
    fontFamily: "Poppins-Bold",
    marginBottom: 25,
    textAlign: "center",
    letterSpacing: 0.5,
    color: colors["primary"],
  },
  input: {
    height: 50,
    borderColor: "#ccc",
    borderWidth: 1,
    marginBottom: 30,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  buttonContainer: {
    marginTop: 20,
    alignItems: "center",
  },
  closeButton: {
    position: "absolute",
    top: 15,
    right: 15,
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors["primary-dark"],
    borderRadius: 20,
    zIndex: 1,
  },
  closeButtonText: {
    color: "#fff",
    fontSize: 20,
    textAlign: "center",
    fontFamily: "Poppins-Regular",
  },
  closeText: {
    color: "#007bff",
    marginTop: 10,
    textAlign: "center",
  },
});

export default modalStyles;
