import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';

import Courses from './../Screens/Courses/Courses';
import Category_Courses from '../Screens/Courses/Category_Courses';
import Courses_Lessons from './../Components/Courses_Lessons';
import PremiumScreen from './../Screens/Courses/PremiumScreen';
import Course_View from './../Screens/Courses/Course_View';
import PlayVideo from './../Screens/Courses/PlayVideo';
import Player from './../Screens/Player';

const Stack = createStackNavigator();

function CourseNavigator(props) {
  return (
    <Stack.Navigator
      initialRouteName="Courses"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Courses" component={Courses} />
      <Stack.Screen name="Category_Courses" component={Category_Courses} />
      <Stack.Screen name="Course_View" component={Course_View} />
      {/* <Stack.Screen name="PlayVideo" component={PlayVideo} /> */}
      <Stack.Screen name="Player" component={Player} />
      <Stack.Screen name="PremiumScreen" component={PremiumScreen} />
    </Stack.Navigator>
  );
}

export default CourseNavigator;
