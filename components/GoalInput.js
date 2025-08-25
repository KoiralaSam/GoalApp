import { StyleSheet, TextInput, View, Button, Keyboard } from "react-native";
import { useState } from "react";

const GoalInput = ({ addGoalHandler }) => {
  const [enteredGoalText, setEnteredGoalText] = useState("");

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function handleButtonPress() {
    addGoalHandler(enteredGoalText);
    setEnteredGoalText("");
  }

  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder="Your course goal"
        style={styles.textInput}
        onChangeText={goalInputHandler}
        value={enteredGoalText}
        submitBehavior="blurAndSubmit"
      />
      <Button title="Add Goal" onPress={handleButtonPress} />
    </View>
  );
};

const styles = StyleSheet.create({
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "70%",
    marginRight: 8,
    padding: 8,
  },
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },
});

export default GoalInput;
