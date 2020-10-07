import React, { useState } from "react";
import {
  StyleSheet,
  View,
  FlatList,
  Alert,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import Header from "./components/header";
import TodoItem from "./components/todoItem";
import AddToDo from "./components/addToDo";

export default function App() {
  const [todo, setTodo] = useState([
    { text: "Buy Coffe", key: "1" },
    { text: "Create an app", key: "2" },
    { text: "Play on the switch", key: "3" },
  ]);

  const submitHandle = (text) => {
    if (text.length > 4) {
      setTodo((prevTodo) => [
        { text: text, key: Math.random().toString() },
        ...prevTodo,
      ]);
    } else {
      Alert.alert("OOPS!", "Todos must be over 4 chars long", [
        { text: "Understood", onPress: () => console.log("alert closed") },
      ]);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <Header />
        <View style={styles.content}>
          <AddToDo submitHandle={submitHandle} />
          <View style={styles.list}>
            <FlatList
              data={todo}
              renderItem={({ item }) => (
                <TodoItem item={item} setTodo={setTodo} />
              )}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    flex: 1,
    padding: 40,
  },
  list: {
    marginTop: 30,
    flex: 1,
  },
});
