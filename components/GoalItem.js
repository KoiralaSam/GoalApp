import { StyleSheet, Text, Pressable } from "react-native";
const GoalItem = ({ text, id, deleteGoalHandler }) => {
  return (
    <Pressable onPress={deleteGoalHandler.bind(this, id)}>
      <Text style={styles.goalItem}>{text}</Text>
    </Pressable>
  );
};
const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
    padding: 8,
    color: "white",
  },
});

export default GoalItem;
