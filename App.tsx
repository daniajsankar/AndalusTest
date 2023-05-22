/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {TextInput, Text, YellowBox} from 'react-native';
import AppTheme from './src/theme/AppTheme';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import MainNavigator from './src/MainNavigator';

const App: () => Node = () => {
  console.disableYellowBox = true; // eslint-disable-line no-console
  YellowBox.ignoreWarnings(['']);
  Text.defaultProps = Text.defaultProps || {};
  Text.defaultProps.allowFontScaling = false;
  TextInput.defaultProps = TextInput.defaultProps || {};
  TextInput.defaultProps.allowFontScaling = false;
  

  return (
    <NavigationContainer theme={AppTheme}>
      <MainNavigator />
    </NavigationContainer>
  );
};

export default App;
