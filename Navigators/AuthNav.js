import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import Sign_up from './../Screens/Sign_up';
import Login from './../Screens/Login';
import ChangePass from '../Screens/Profile/ChangePass';
import onBoarding from './../Screens/onBoarding';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createStackNavigator();

function AuthNav(props) {
  // const [isFirstLaunch, setIsFirstLaunch] = useState(null);

  // useEffect(() => {
  //   AsyncStorage.getItem('alreadyLaunched').then(value => {
  //     if (value === null) {
  //       AsyncStorage.setItem('alreadyLaunched', 'true');
  //       setIsFirstLaunch(true);
  //     } else {
  //       setIsFirstLaunch(false);
  //     }
  //   });

  //   if(isFirstLaunch === null){
  //     return null;
  //   }else if(isFirstLaunch === true){
  //     return

  //   }
  // });
  return (
    <Stack.Navigator
      initialRouteName="Courses"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="onBoarding" component={onBoarding} />
      <Stack.Screen name="Sign_up" component={Sign_up} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="ChangePass" component={ChangePass} />
    </Stack.Navigator>
  );
}

export default AuthNav;
