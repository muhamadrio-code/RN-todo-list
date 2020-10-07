import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export default function TodoItem({ item, setTodo }) {
  const pressHandle = (key) => {
    setTodo((prevTodo) => {
      return prevTodo.filter((todo) => todo.key != key);
    });
  };

  return (
    <TouchableOpacity>
      <View style={styles.item}>
        <Text>{item.text}</Text>
        <MaterialIcons
          name="delete"
          size={18}
          color="#ccc"
          onPress={() => pressHandle(item.key)}
        />
      </View>
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
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
