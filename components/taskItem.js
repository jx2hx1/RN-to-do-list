import { Pressable, StyleSheet, Text, View } from "react-native";

export default function TaskItem(props) {
  return (
    <Pressable
      onPress={props.onDeleteTask(props.id)}
      style={({ pressed }) => pressed && styles.pressedItem}
    >
      <View style={styles.taskItem}>
        <Text style={styles.taskItemText}>{props.text}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  taskItem: {
    width: 250,
    height: 35,
    margin: 8,
    borderRadius: 10,
    backgroundColor: "#0066ff",
    justifyContent: "center",
    alignItems: "center",
  },
  pressedItem: {
    opacity: 0.4,
  },
  taskItemText: {
    fontSize: 16,
    color: "#ffffff",
    fontWeight: "500",
  },
});
