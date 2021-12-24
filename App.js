import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Login from './Screens/Login';
// import FAQs from './Screens/FAQs';
import ChangePass from './Screens/Profile/ChangePass';

import TabNavigator from './Navigators/TabNavigation.js';
import Sign_up from './Screens/Sign_up';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Signup" component={Sign_up} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="ChangePass" component={ChangePass} />
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
