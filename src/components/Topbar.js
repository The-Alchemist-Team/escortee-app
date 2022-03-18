import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Topbar = ({ title, bgColor }) => {
  return (
    <View
      style={{
        ...styles.container,
        backgroundColor: bgColor ? bgColor : "#EAB308",
      }}
    >
      <Text style={styles.heading}>{title}</Text>
    </View>
  );
};

export { Topbar };

const styles = StyleSheet.create({
  container: {
    alignSelf: "stretch",
    height: 52,
    flexDirection: "row",
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
