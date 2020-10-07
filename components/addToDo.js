import React, { useState } from "react";
import { Button, StyleSheet, TextInput, View } from "react-native";

export default function AddToDo({ submitHandle }) {
  const [text, setText] = useState("");

  return (
    <View>
      <TextInput
        style={styles.input}
        onChangeText={(val) => {
          setText(val);
        }}
        placeholder="Add new todo..."
      />
      <Button
        onPress={() => {
          submitHandle(text);
        }}
        title="Add todo"
        color="coral"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#ddd",
    padding: 4,
    marginBottom: 8,
  },
});
