/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './screens/Login';

const Stack = createNativeStackNavigator();

function MainNavigator() {
  const [initialRoute, setInitialRoute] = useState('Login');

  if (initialRoute == null) {
    return null;
  }
  return (
    <Stack.Navigator initialRouteName={initialRoute}>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

export default MainNavigator;
