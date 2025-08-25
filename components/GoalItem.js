import { StyleSheet, Text, Pressable, View } from "react-native";
const GoalItem = ({ text, id, deleteGoalHandler }) => {
  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: "white" }}
        onPress={deleteGoalHandler.bind(this, id)}
        style={({ pressed }) => pressed && styles.pressedItem}
      >
        <Text style={styles.goalText}>{text}</Text>
      </Pressable>
    </View>
  );
};
const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
    color: "white",
  },
  goalText: {
    color: "white",
    padding: 8,
  },
  pressedItem: {
    opacity: 0.5,
  },
});

export default GoalItem;
