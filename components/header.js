import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>My TodoList</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 80,
    width: "100%",
    paddingTop: 20,
    backgroundColor: "coral",
    justifyContent: "center",
  },
  title: {
    textAlign: "center",
    color: "#fff",
    fontWeight: "bold",
  },
});
