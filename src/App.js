import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import {
  LoginScreen,
  RegisterScreen,
  HomeScreen,
  GettingStarted,
} from "./screens";
import {
  GETTING_STARTED_SCREEN,
  HOME_SCREEN,
  LOGIN_SCREEN,
  PLACE_SCREEN,
  REGISTER_SCREEN,
} from "./screens/Constants";
import {
  useAuthContext,
  useAuthDispatchContext,
} from "./context/Auth/AuthContext";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import auth from "@react-native-firebase/auth";
import { LOGIN_SUCCESS } from "./context/Auth/constants";
import { PlaceScreen } from "./screens/PlacesScreen";
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const App = () => {
  const { user } = useAuthContext();
  const dispatch = useAuthDispatchContext();

  // useEffect(() => {
  //   auth().onAuthStateChanged((user) => {
  //     if (user) {
  //       dispatch({ type: LOGIN_SUCCESS, payload: user });
  //     }
  //   });
  // }, []);

  return (
    <NavigationContainer>
      {user ? (
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name={HOME_SCREEN} component={HomeScreen} />
          <Stack.Screen name={PLACE_SCREEN} component={PlaceScreen} />
        </Stack.Navigator>
      ) : (
        <Stack.Navigator>
          <Stack.Screen
            name={GETTING_STARTED_SCREEN}
            component={GettingStarted}
          />
          <Stack.Screen name={LOGIN_SCREEN} component={LoginScreen} />
          <Stack.Screen name={REGISTER_SCREEN} component={RegisterScreen} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({});

export default App;
