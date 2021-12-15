import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';

import Aboutus from '../Screens/Profile/Aboutus';
import Profile from '../Screens/Profile/Profile';
import FAQs from './../Screens/Profile/FAQs';
import Download from './../Screens/Profile/Download';
import MyProfile from './../Screens/Profile/MyProfile';

const Stack = createStackNavigator();

function ProfileNavigator(props) {
  return (
    <Stack.Navigator
      initialRouteName="Profile"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="MyProfile" component={MyProfile} />
      <Stack.Screen name="Download" component={Download} />
      <Stack.Screen name="Aboutus" component={Aboutus} />
      <Stack.Screen name="FAQs" component={FAQs} />
    </Stack.Navigator>
  );
}

export default ProfileNavigator;
