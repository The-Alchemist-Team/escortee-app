import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { LoginScreen, RegisterScreen, HomeScreen } from "./screens";
import {
  HOME_SCREEN,
  LOGIN_SCREEN,
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
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const App = () => {
  const { user } = useAuthContext();
  const dispatch = useAuthDispatchContext();
  useEffect(() => {
    auth().onAuthStateChanged((user) => {
      if (user) {
        dispatch({ type: LOGIN_SUCCESS, payload: user });
      }
    });
  }, []);

  const tabBarIcons = ({ focused, color, size }) => {
    return (
      <View>
        <Text>Hi</Text>
      </View>
    );
  };

  return (
    <NavigationContainer>
      {user ? (
        <Tab.Navigator
          screenOptions={() => ({
            headerShown: false,
            tabBarIcon: tabBarIcons,
            tabBarActiveTintColor: "tomato",
            tabBarInactiveTintColor: "gray",
          })}
        >
          <Tab.Screen name={HOME_SCREEN} component={HomeScreen} />
        </Tab.Navigator>
      ) : (
        <Stack.Navigator>
          <Stack.Screen name={LOGIN_SCREEN} component={LoginScreen} />
          <Stack.Screen name={REGISTER_SCREEN} component={RegisterScreen} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({});

export default App;
