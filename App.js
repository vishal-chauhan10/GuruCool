import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Signup from './Screens/Signup';
import Login from './Screens/Login';
import Home from './Screens/Home';
// import FAQs from './Screens/FAQs';
import Aboutus from './Screens/Profile/Aboutus';
import PremiumScreen from './Screens/Courses/PremiumScreen';
import ChangePass from './Screens/Profile/ChangePass';

import TabNavigator from './Navigators/TabNavigation.js';
import Sign_up from './Screens/Sign_up';
import MyProfile from './Screens/Profile/MyProfile';
import FAQs from './Screens/Profile/FAQs';
import Download from './Screens/Profile/Download';
import Courses from './Screens/Courses/Courses';
import Photo_Courses from './Screens/Courses/Photo_Courses';
import Profile from './Screens/Profile/Profile';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Signup" component={Sign_up} />
      {/* <Stack.Screen name="Login" component={Logi_n} /> */}
      {/* <Stack.Screen name="Signup" component={Signup} /> */}
      <Stack.Screen name="Login" component={Login} />
      {/* <Stack.Screen name="Profile" component={Profile} /> */}

      <Stack.Screen name="Home" component={Home} />
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
