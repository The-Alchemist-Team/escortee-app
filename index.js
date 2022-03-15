/**
 * @format
 */

import { AppRegistry } from "react-native";
import React from "react";
import App from "./src/App";
import { name as appName } from "./app.json";
import { ContextProvider } from "./src/context/context";

const Root = () => {
  return (
    <ContextProvider>
      <App />
    </ContextProvider>
  );
};

AppRegistry.registerComponent(appName, () => Root);
