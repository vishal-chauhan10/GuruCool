import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Signup from './Screens/Signup';
import Login from './Screens/Login';
import Home from './Screens/Home';
import FAQs from './Screens/FAQs';
import Aboutus from './Screens/Aboutus';
import PremiumScreen from './Screens/PremiumScreen';
import ChangePass from './Screens/ChangePass';

import TabNavigator from './Navigators/TabNavigation.js';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="ChangePass" component={ChangePass} />
      <Stack.Screen name="PremiumScreen" component={PremiumScreen} />
      <Stack.Screen name="Aboutus" component={Aboutus} />
      <Stack.Screen name="FAQs" component={FAQs} />
      <Stack.Screen name="Home" component={Home} />
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
