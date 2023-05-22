/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import auth from '@react-native-firebase/auth';
import Login from './screens/Login';
import Home from './screens/Home';
import Category from './screens/Category';
import CatDetails from './screens/CatDetails';

const Stack = createNativeStackNavigator();

function MainNavigator() {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  // Handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) return null;

  return (
    <Stack.Navigator initialRouteName={user ? "Home" : "Login"}>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: true }}
      />
      <Stack.Screen
        name="Category"
        component={Category}
        options={{ headerShown: true }}
      />
      <Stack.Screen
        name="Cat Details"
        component={CatDetails}
        options={{ headerShown: true }}
      />
    </Stack.Navigator>
  );
}

export default MainNavigator;
