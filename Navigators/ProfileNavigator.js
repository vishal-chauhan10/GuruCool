import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';

import Aboutus from '../Screens/Profile/Aboutus';
import Profile from '../Screens/Profile/Profile';
import FAQs from './../Screens/Profile/FAQs';

const Stack = createStackNavigator();

function ProfileNavigator(props) {
  return (
    <Stack.Navigator
      //   initialRouteName="Aboutus"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Aboutus" component={Aboutus} />
      <Stack.Screen name="FAQs" component={FAQs} />
    </Stack.Navigator>
  );
}

export default ProfileNavigator;
