import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import Home from './Home';
import Sign_up from './Sign_up';
import Download from './Profile/Download';
import * as Animatable from 'react-native-animatable';
import Feather from 'react-native-vector-icons/Feather';
import Courses from './Courses/Courses';
import Photo_Courses from './Courses/Photo_Courses';
import Profile from './Profile/Profile';

function Login({navigation}) {
  const [data, setData] = React.useState({
    username: '',
    password: '',
    check_textInputChange: false,
    secureTextEntry: true,
    isValidUser: true,
    isValidPassword: true,
  });

  const textInputChange = val => {
    if ((val.length = !0)) {
      setData({
        ...data,
        email: val,
        check_textInputChange: true,
      });
    } else {
      setData({
        ...data,
        email: val,
        check_textInputChange: false,
      });
    }
  };

  const handlePasswordChange = val => {
    if (val.trim().length >= 8) {
      setData({
        ...data,
        password: val,
        isValidPassword: true,
      });
    } else {
      setData({
        ...data, // Array Destructuring
        password: val,
        isValidPassword: false,
      });
    }
  };
  const updateSecureTextEntry = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry,
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.heading}>
        <Text style={{fontSize: 30, fontWeight: '700', color: '#fff'}}>
          Welcome to GuruCool
        </Text>
      </View>

      <View
        style={{
          paddingTop: 77,
          alignItems: 'center',
          flexDirection: 'row',
          paddingHorizontal: 10,
        }}>
        <Feather
          name="mail"
          style={{padding: 5}}
          // color={colors.text}
          size={20}
        />
        <TextInput
          style={{
            width: 330,
            height: 51,
            backgroundColor: '#191414',
            borderRadius: 10,
            borderColor: 'white',
            borderWidth: 1,
          }}
          // textAlign="left"
          placeholder="Email"
          // placeholderTextColor="#fff"
          // autoCapitalize="none"
          onChangeText={val => textInputChange(val)}
        />
        {data.check_textInputChange ? (
          <Animatable.View animation="bounceIn">
            <Feather
              name="check-circle"
              style={{padding: 5}}
              color="green"
              size={20}
            />
          </Animatable.View>
        ) : null}
      </View>

      <View style={styles.fullName}>
        <Feather
          name="lock"
          style={{padding: 5}}
          // color={colors.text}
          size={20}
        />
        <TextInput
          style={{
            width: 330,
            height: 51,
            backgroundColor: '#191414',
            borderRadius: 10,
            borderWidth: 1,
            borderColor: '#fff',
          }}
          placeholder="Password"
          // placeholderStyle={{
          //   color: '#fff',
          //   paddingLeft: 18,
          //   placeholderTextColor: '#fff',
          // }}
          // placeholderTextColor="#fff"
          secureTextEntry={data.secureTextEntry ? true : false}
          // onChange={e => {
          //   setUsernameReg(e.target.value);
          // }}
        />
        <TouchableOpacity onPress={updateSecureTextEntry}>
          {data.secureTextEntry ? (
            <Feather
              name="eye-off"
              style={{padding: 5}}
              color="grey"
              size={20}
            />
          ) : (
            <Feather name="eye" style={{padding: 5}} color="grey" size={20} />
          )}
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={{paddingLeft: 249, paddingTop: 11}}>
        <Text>Recovery Password</Text>
      </TouchableOpacity>

      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => navigation.navigate('Home')}>
          <Text style={{fontSize: 25, color: '#fff'}}>Login</Text>
        </TouchableOpacity>
      </View>

      <View style={{alignItems: 'center', paddingTop: 107, paddingBottom: 10}}>
        <Text style={{color: '#fff', fontWeight: '200', fontSize: 16}}>
          Or continue with
        </Text>
      </View>

      <View
        style={{
          flexDirection: 'row',
          paddingHorizontal: 55,
          justifyContent: 'space-around',
          padding: 10,
        }}>
        <View style={styles.socialIcons}></View>

        <View style={styles.socialIcons}></View>

        <View style={styles.socialIcons}></View>
      </View>

      <View style={styles.newAcc}>
        <Text style={{fontWeight: '300'}}>Not a member ?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Text
            style={{
              color: '#4285F4',
              paddingLeft: 5,
              textDecorationLine: 'underline',
            }}>
            Register here
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#191414',
  },
  heading: {
    marginTop: 156,
    justifyContent: 'center',
    alignItems: 'center',
  },
  fullName: {
    paddingHorizontal: 10,
    flexDirection: 'row',
    paddingTop: 25,
    alignItems: 'center',
  },
  btn: {
    height: 51,
    width: 330,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4285F4',
    borderRadius: 10,
    marginTop: 35,
  },
  newAcc: {
    flexDirection: 'row',
    paddingTop: 18,
    alignItems: 'center',
    justifyContent: 'center',
  },
  socialIcons: {
    width: 60,
    height: 41,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 10,
    // padding: 10,
  },
});

export default Login;
