import { useState } from "react";
import {
  Image,
  Modal,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

export default function InputModal(props) {
  const [task, setTask] = useState("");

  const onChangeTextInput = (text) => {
    setTask(text);
  };

  const onAddTask = () => {
    if (!task) {
      return;
    }
    props.onAddTask(task);
  };

  const buttons = [
    { text: "Add 💫", eventHandler: onAddTask },
    { text: "Cancel ❌", eventHandler: props.modalHandler },
  ];

  return (
    <Modal animationType="slide">
      <View style={styles.Container}>
        <Image
          style={styles.image}
          source={require("../assets/images/cat.png")}
        />
        <TextInput
          placeholder="Add a task!"
          style={styles.textInput}
          onChangeText={onChangeTextInput}
          value={task}
        />
        <View style={styles.customButtonContainer}>
          {buttons.map((button) => (
            <Pressable
              style={({ pressed }) => pressed && styles.pressedItem}
              onPress={button.eventHandler}
            >
              <View style={styles.customButton}>
                <Text style={styles.customButtonText}>{button.text}</Text>
              </View>
            </Pressable>
          ))}
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  image: {
    width: 150,
    height: 150,
  },
  textInput: {
    width: "100%",
    marginTop: 30,
    padding: 10,
    borderWidth: 1,
    borderColor: "#cccccc",
  },
  pressedItem: {
    opacity: 0.7,
  },
  customButtonContainer: {
    flexDirection: "row",
    marginTop: 30,
  },
  customButton: {
    marginHorizontal: 20,
  },
  customButtonText: {
    fontSize: 16,
    fontWeight: "500",
  },
});
