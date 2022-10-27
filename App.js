import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import InputModal from "./components/InputModal";
import TaskItem from "./components/taskItem";
export default function App() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [tasks, setTasks] = useState([]);

  const modalHandler = () => {
    setIsModalVisible((prev) => !prev);
  };

  const addTaskHandler = (text) => {
    setTasks((prev) => [...prev, { text: text, id: Math.random().toString() }]);
    modalHandler();
  };

  const deleteTaskHandler = (id) => () => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  return (
    <View style={styles.appContainer}>
      {isModalVisible && (
        <InputModal modalHandler={modalHandler} onAddTask={addTaskHandler} />
      )}
      <Pressable style={styles.customButtonContainer} onPress={modalHandler}>
        <Text style={styles.customButtonText}> Add tasks ➕</Text>
      </Pressable>
      <View style={styles.tasksContainer}>
        <FlatList
          data={tasks}
          renderItem={(itemData) => (
            <TaskItem
              text={itemData.item.text}
              id={itemData.item.id}
              onDeleteTask={deleteTaskHandler}
            />
          )}
          keyExtractor={(item, index) => item.id}
          alwaysBounceVertical={false}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 70,
    paddingHorizontal: 16,
    alignItems: "center",
  },
  customButtonContainer: {
    width: 300,
    height: 50,
    marginBottom: 30,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 16,
    backgroundColor: "#000000",
    shadowOffset: { width: 15, height: 15 },
    shadowColor: "#bebebe",
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },
  customButtonText: {
    color: "#ffffff",
    fontSize: 20,
    fontWeight: "700",
  },
  tasksContainer: {
    flex: 4,
  },
});
