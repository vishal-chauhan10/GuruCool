import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Home from './../Screens/Home';
import Category_Courses from '../Screens/Courses/Category_Courses';
import PremiumScreen from './../Screens/Courses/PremiumScreen';
import Course_View from './../Screens/Courses/Course_View';
import PlayVideo from './../Screens/Courses/PlayVideo';

const Stack = createStackNavigator();

function HomeNavigator(props) {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Category_Courses" component={Category_Courses} />
      <Stack.Screen name="Course_View" component={Course_View} />
      <Stack.Screen name="PlayVideo" component={PlayVideo} />
      <Stack.Screen name="PremiumScreen" component={PremiumScreen} />
    </Stack.Navigator>
  );
}

export default HomeNavigator;
