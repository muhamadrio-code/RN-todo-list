import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

export default function TodoItem({ item, setTodo }) {
  const pressHandle = (key) => {
    setTodo((prevTodo) => {
      return prevTodo.filter((todo) => todo.key != key);
    });
  };

  return (
    <TouchableOpacity onPress={() => pressHandle(item.key)}>
      <Text style={styles.item}>{item.text}</Text>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  item: {
    padding: 16,
    marginTop: 16,
    borderColor: "#ddd",
    borderRadius: 10,
    borderStyle: "dashed",
    borderWidth: 1,
  },
});
