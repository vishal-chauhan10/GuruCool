import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import TabNavigator from './Navigators/TabNavigation.js';
import {getItem} from './data/storage';
import AuthNav from './Navigators/AuthNav';

const Stack = createStackNavigator();

export default function App(props) {
  const [state, setState] = useState(false);

  useEffect(() => {
    async function signedInStatus() {
      const isSignedIn = await getItem('isSignedIn');
      if (isSignedIn) {
        setState(true);
      }
    }

    signedInStatus();
  }, []);

  return (
    <NavigationContainer>
      {state ? <TabNavigator /> : <AuthNav />}
    </NavigationContainer>
  );
}
