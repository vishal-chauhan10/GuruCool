import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Provider, useSelector, useDispatch} from 'react-redux';

import TabNavigator from './Navigators/TabNavigation.js';
import {getItem} from './data/storage';
import AuthNav from './Navigators/AuthNav';

import store from './redux/store';

const Stack = createStackNavigator();

function InnerApp(props) {
  const isSignedIn = useSelector(state => state.auth.isSignedIn);
  const dispatch = useDispatch();

  useEffect(() => {
    async function signedInStatus() {
      const isSignedInLocal = await getItem('isSignedIn');
      if (isSignedInLocal) {
        dispatch(login());
        console.log('Is Signed In from App.js: ', isSignedIn);
      }
    }

    signedInStatus();
  }, []);

  return isSignedIn ? <TabNavigator /> : <AuthNav />;
}

export default function App(props) {
  // const [state, setState] = useState(false);

  return (
    <NavigationContainer>
      <Provider store={store}>
        <InnerApp />
      </Provider>
    </NavigationContainer>
  );
}
