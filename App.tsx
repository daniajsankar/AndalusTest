/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from "react";
import type { Node } from "react";
import { TextInput, Text, YellowBox } from "react-native";
import AppTheme from "./src/theme/AppTheme";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import MainNavigator from "./src/MainNavigator";
import Toast, { BaseToast } from "react-native-toast-message";

const App: () => Node = () => {
  console.disableYellowBox = true; // eslint-disable-line no-console
  YellowBox.ignoreWarnings([""]);
  Text.defaultProps = Text.defaultProps || {};
  Text.defaultProps.allowFontScaling = false;
  TextInput.defaultProps = TextInput.defaultProps || {};
  TextInput.defaultProps.allowFontScaling = false;

  const toastConfig = {
    error: ({ text2, ...rest }) => (
      <BaseToast
        {...rest}
        style={{ borderLeftColor: "red" }}
        contentContainerStyle={{ paddingHorizontal: 10 }}
        text2Style={{
          fontSize: 13,
          color: "#000",
        }}
        text2={text2}
        text1NumberOfLines={2}
        text2NumberOfLines={3}
      />
    ),
    success: ({ text2, ...rest }) => (
      <BaseToast
        {...rest}
        style={{ borderLeftColor: "green" }}
        contentContainerStyle={{ paddingHorizontal: 10 }}
        text2Style={{
          fontSize: 13,
          color: "#000",
        }}
        text2={text2}
        text1NumberOfLines={2}
        text2NumberOfLines={3}
      />
    ),
  };

  return (
    <NavigationContainer theme={AppTheme}>
      <MainNavigator />
      <Toast config={toastConfig} />
    </NavigationContainer>
  );
};

export default App;
