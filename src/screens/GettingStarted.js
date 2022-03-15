import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";
import { LOGIN_SCREEN } from "./Constants";

const GettingStarted = ({ navigation, route }) => {
  return (
    <View>
      <Text>GettingStarted</Text>
      <Button
        title="Go"
        onPress={() => {
          navigation.navigate(LOGIN_SCREEN);
        }}
      />
    </View>
  );
};

export { GettingStarted };

const styles = StyleSheet.create({});
