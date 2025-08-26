import {
  StyleSheet,
  TextInput,
  View,
  Button,
  Modal,
  Image,
} from "react-native";
import { useState } from "react";

const GoalInput = ({ addGoalHandler, modalIsVisible, endAddGoalHandler }) => {
  const [enteredGoalText, setEnteredGoalText] = useState("");

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  const handleAddGoalPress = () => {
    addGoalHandler(enteredGoalText);
    setEnteredGoalText("");
  };

  const handleCancelButton = () => {
    endAddGoalHandler();
  };

  return (
    <Modal visible={modalIsVisible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          source={require("../assets/images/goal.png")}
          style={styles.image}
        />
        <TextInput
          placeholder="Your course goal"
          style={styles.textInput}
          onChangeText={goalInputHandler}
          value={enteredGoalText}
          submitBehavior="blurAndSubmit"
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button
              title="Add Goal"
              onPress={handleAddGoalPress}
              color="#804dc4ff"
            />
          </View>
          <View style={styles.button}>
            <Button
              title="cancel"
              onPress={handleCancelButton}
              color="#04dc4ff"
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  textInput: {
    borderWidth: 1,
    borderColor: "#e4d0ff",
    backgroundColor: "#e4d0ff",
    color: "#1d0955ff",
    borderRadius: 6,
    width: "100%",
    marginRight: 8,
    padding: 16,
  },
  inputContainer: {
    backgroundColor: "#311b6b",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  buttonContainer: {
    marginTop: 16,
    flexDirection: "row",
  },
  button: {
    width: "30%",
    marginHorizontal: 8,
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
});

export default GoalInput;
