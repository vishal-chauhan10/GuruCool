import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Fontisto';

import Home from '../Screens/Home';

import IconHome from '../Svg_Components/IconHome';
import IconCourses from '../Svg_Components/IconCourses';
import IconProfile from '../Svg_Components/IconProfile';

import ProfileNavigator from './ProfileNavigator';
import Search from './../Screens/Search';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';
import CourseNavigator from './CourseNavigator';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  function getTabs(route) {
    // If the focused route is not found, we need to assume it's the initial screen
    // This can happen during if there hasn't been any navigation inside the screen
    // In our case, it's "Feed" as that's the first screen inside the navigator
    const routeName = getFocusedRouteNameFromRoute(route) ?? 'Home';

    console.log('Route Name: ', routeName);

    return routeName == 'Course_View' || 'PremiumScreen' ? false : true;
  }

  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#4ea3ad"
      style={{backgroundColor: '#0b0909'}}
      tabBarOptions={{
        showLabel: false,
        keyboardHidesTabBar: true,
        style: {
          backgroundColor: '#0b0909',
        },
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
        name="CourseNavigator"
        component={CourseNavigator}
        options={({route}) => ({
          tabBarVisible: getTabs(route),
          tabBarIcon: ({color}) => (
            <IconCourses width={32} height={32} stroke={color} />
          ),
        })}
      />
      <Tab.Screen
        name="ProfileNavigator"
        component={ProfileNavigator}
        options={({route}) => ({
          tabBarVisible: false,
          tabBarIcon: ({color}) => (
            <IconProfile width={32} height={32} stroke={color} />
          ),
        })}
      />
    </Tab.Navigator>
  );
}
