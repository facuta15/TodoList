import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  ScrollView,
  Keyboard,
  TextInput,
  TouchableOpacity,

} from "react-native";
import Task from "./components/Task";
import { useState } from "react";

export default function App() {
  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);

  const handleAddTask = () => {
    if (task) {
      setTaskItems([...taskItems, task]);
      setTask(null);
      Keyboard.dismiss();
    }
    return;
  };
  const eraseTask = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);
  };

  return (
    <View style={styles.container}>
      <View style={styles.taskWrapper}>
        <Text style={styles.sectionTitle}>Today tasks</Text>
        <ScrollView style={styles.scrollView}>
          {taskItems.map((item, index) => {
            return (
              <View key={index}>
                <TouchableOpacity onLongPress={() => eraseTask(index)}>
                  <Task text={item} />
                </TouchableOpacity>
              </View>
            );
          })}
        </ScrollView>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Write a new task"
          value={task}
          onChangeText={(text) => setTask(text)}
        />
        <TouchableOpacity onPress={() => handleAddTask()}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E8EAED",
  },
  taskWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  scrollView: {
    maxHeight: "85%",
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingBottom: 20,
    borderTopWidth: 1,
    borderTopColor: "#E0E0E0",
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "#E8EAED",
  },
  textInput: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: "#E0E0E0",
    borderRadius: 30,
    marginRight: 10,
    borderWidth:1,
    borderColor: "#000000"
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: "#E0E0E0",
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    borderWidth:1,
    borderColor: "#000000",
  },
  addText: {
    fontSize: 30,
    fontWeight: "bold",
  },
});