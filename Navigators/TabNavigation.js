import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/Fontisto';

import Courses from '../Screens/Courses/Courses';
import Home from '../Screens/Home';

import IconHome from '../Svg_Components/IconHome';
import IconCourses from '../Svg_Components/IconCourses';
import IconProfile from '../Svg_Components/IconProfile';

import ProfileNavigator from './ProfileNavigator';
import Search from './../Screens/Search';

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
            <IconHome width={30} height={30} stroke={color} />
          ),
        }}
      />

      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarIcon: ({color}) => (
            <Icon size={32} name={'search'} color={color} />
          ),
          tabBarIconStyle: {
            padding: 15,
          },
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
        name="ProfileNavigator"
        component={ProfileNavigator}
        options={{
          tabBarIcon: ({color}) => (
            <IconProfile width={32} height={32} stroke={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
