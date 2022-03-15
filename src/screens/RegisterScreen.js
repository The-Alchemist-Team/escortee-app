import { StyleSheet, Text, View } from "react-native";
import React from "react";

const RegisterScreen = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  return (
    <View>
      <Text>register</Text>
    </View>
  );
};

export { RegisterScreen };

const styles = StyleSheet.create({});
