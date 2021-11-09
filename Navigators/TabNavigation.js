import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';

import Courses from '../Screens/Courses';
import Home from '../Screens/Home';
import Profile from '../Screens/Profile';

import IconHome from '../Svg_Components/IconHome';
import IconCourses from '../Svg_Components/IconCourses';
import IconProfile from '../Svg_Components/IconProfile';

const Tab = createMaterialBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#4ea3ad"
      barStyle={{backgroundColor: 'black'}}
      screenOptions={{
        tabBarLabel: false,
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({color}) => (
            <IconHome width={32} height={32} stroke={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Courses"
        component={Courses}
        options={{
          tabBarIcon: ({color}) => (
            <IconCourses width={32} height={32} stroke={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({color}) => (
            <IconProfile width={32} height={32} stroke={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
