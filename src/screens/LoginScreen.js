import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  Button,
} from "react-native";
import React, { useState } from "react";
import { useAuthDispatchContext } from "../context/Auth/AuthContext";
import { facebookLogin, googleLogin, loginUser } from "../context/Auth/actions";
import { HOME_SCREEN, REGISTER_SCREEN } from "./Constants";

const LoginScreen = ({ navigation, route }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useAuthDispatchContext();

  const onFooterLinkPress = () => {
    navigation.navigate(REGISTER_SCREEN);
  };

  const onLoginPress = () => {
    loginUser(dispatch, {
      email,
      password,
    })
      .then(() => {
        navigation.navigate(HOME_SCREEN);
      })
      .catch((err) => {
        alert(err);
      });
  };

  const onFacebookLogin = () => {
    facebookLogin(dispatch)
      .then(() => {})
      .catch((err) => {
        alert(err);
      });
  };
  const onGoogleLogin = () => {
    googleLogin(dispatch)
      .then((res) => {})
      .catch((err) => {
        alert(err);
      });
  };
  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="E-mail"
          placeholderTextColor="#aaaaaa"
          onChangeText={(text) => setEmail(text)}
          value={email}
          underlineColorAndroid="transparent"
          autoCapitalize="none"
        />
        <TextInput
          style={styles.input}
          placeholderTextColor="#aaaaaa"
          secureTextEntry
          placeholder="Password"
          onChangeText={(text) => setPassword(text)}
          value={password}
          underlineColorAndroid="transparent"
          autoCapitalize="none"
        />
        <TouchableOpacity style={styles.button} onPress={() => onLoginPress()}>
          <Text style={styles.buttonTitle}>Log in</Text>
        </TouchableOpacity>
        <View style={styles.footerView}>
          <Text style={styles.footerText}>
            Don't have an account?
            <Text onPress={onFooterLinkPress} style={styles.footerLink}>
              Sign up
            </Text>
          </Text>
        </View>
        <Button title="Sign in with google" onPress={onGoogleLogin} />
        {/* <Button title="Sign in with Facebook" onPress={onFacebookLogin} /> */}
      </View>
    </View>
  );
};

export { LoginScreen };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  title: {},
  logo: {
    flex: 1,
    height: 120,
    width: 90,
    alignSelf: "center",
    margin: 30,
  },
  input: {
    height: 48,
    borderRadius: 5,
    overflow: "hidden",
    backgroundColor: "white",
    marginTop: 10,
    marginBottom: 10,
    paddingLeft: 16,
  },
  button: {
    backgroundColor: "#788eec",
    marginTop: 20,
    height: 48,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonTitle: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  footerView: {
    flex: 1,
    alignItems: "center",
    marginTop: 20,
  },
  footerText: {
    fontSize: 16,
    color: "#2e2e2d",
  },
  footerLink: {
    color: "#788eec",
    fontWeight: "bold",
    fontSize: 16,
  },
});
