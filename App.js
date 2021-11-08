import React from 'react';
import {View, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Signup from './Screens/Signup';
import Login from './Screens/Login';
import Home from './Screens/Home';
import Profile from './Screens/Profile';
import Courses from './Screens/Courses';
// import TabNavigator from './Navigators/TabNavigation.js';
import HomeIcon from './Svg_Components/HomeIcon.svg';
const Stack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

function MyStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Home" component={Home} />
      {/* <Stack.Screen name="Tabs" component={TabNavigator} /> */}
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
