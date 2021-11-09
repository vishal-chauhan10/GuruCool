import React from 'react';
import {View, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Signup from './Screens/Signup';
import Login from './Screens/Login';
import TabNavigator from './Navigators/TabNavigation.js';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Tabs" component={TabNavigator} />
    </Stack.Navigator>
  );
}

export default function App(props) {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}
