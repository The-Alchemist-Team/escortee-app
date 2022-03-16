import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Topbar = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Escortee App</Text>
    </View>
  );
};

export { Topbar };

const styles = StyleSheet.create({
  container: {
    alignSelf: "stretch",
    height: 52,
    flexDirection: "row", // row
    backgroundColor: "#EAB308",
    alignItems: "center",
    justifyContent: "space-between", // center, space-around
    paddingLeft: 10,
    paddingRight: 10,
  },
  heading: {
    fontSize: 20,
    color: "#fff",
    fontWeight: "bold",
  },
});
