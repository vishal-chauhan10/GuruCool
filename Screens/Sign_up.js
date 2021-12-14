import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Home from './Home';
import Login from './Login';
import * as Animatable from 'react-native-animatable';
import Feather from 'react-native-vector-icons/Feather';
import FullName from '../Components/FullName';
import Password from '../Components/Password';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import IconGoogle from '../Svg_Components/IconGoogle';
import IconApple from './../Svg_Components/IconApple';
import IconFb from './../Svg_Components/IconFb';
import LinearGradient from 'react-native-linear-gradient';

function Sign_up({navigation}) {
  const [data, setData] = React.useState({
    username: '',
    password: '',
    confirm_password: '',
    check_textInputChange: false,
    secureTextEntry: true,
    confirm_secureTextEntry: true,
  });

  const textInputChange = val => {
    if (val.length !== 0) {
      setData({
        ...data,
        username: val,
        check_textInputChange: true,
      });
    } else {
      setData({
        ...data,
        username: val,
        check_textInputChange: false,
      });
    }
  };

  const handlePasswordChange = val => {
    setData({
      ...data,
      password: val,
    });
  };

  const handleConfirmPasswordChange = val => {
    setData({
      ...data,
      confirm_password: val,
    });
  };

  const updateSecureTextEntry = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry,
    });
  };

  const updateConfirmSecureTextEntry = () => {
    setData({
      ...data,
      confirm_secureTextEntry: !data.confirm_secureTextEntry,
    });
  };
  return (
    <View style={styles.container}>
      <View style={styles.heading}>
        <Text style={{fontSize: 30, fontWeight: '700', color: '#fff'}}>
          Register here
        </Text>
      </View>

      <FullName iconName="user" placeholder="FullName" />
      <FullName iconName="mail" placeholder="Email" />
      <Password iconName="lock" placeholder="Password" />

      <View style={styles.fullName}>
        <Feather name="lock" style={{padding: 5}} size={20} />
        <TextInput
          style={{
            width: 270,
            height: 49,
            backgroundColor: '#191414',
          }}
          secureTextEntry={data.confirm_secureTextEntry ? true : false}
          placeholder="Confirm Password"
          onChangeText={val => handleConfirmPasswordChange(val)}
        />
        <TouchableOpacity onPress={updateConfirmSecureTextEntry}>
          {data.confirm_secureTextEntry ? (
            <Feather name="eye-off" color="grey" size={20} />
          ) : (
            <Feather name="eye" color="grey" size={20} />
          )}
        </TouchableOpacity>
      </View>

      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => navigation.navigate(Home)}>
          <Text style={{fontSize: 25, color: '#fff'}}>Sign Up</Text>
        </TouchableOpacity>
      </View>

      <View
        style={{
          alignItems: 'center',
          paddingTop: 30,
          paddingBottom: 10,
          flexDirection: 'row',
          justifyContent: 'space-evenly',
        }}>
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          colors={['#191414', '#Fff']}
          style={{
            width: 66,
            height: 1,
            backgroundColor: 'white',
          }}
        />
        <Text style={{color: '#fff', fontWeight: '200', fontSize: 16}}>
          Or continue with
        </Text>
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          colors={['#fff', '#191414']}
          style={{
            width: 66,
            height: 1,
            backgroundColor: 'white',
          }}
        />
      </View>

      <View
        style={{
          flexDirection: 'row',
          paddingHorizontal: 55,
          justifyContent: 'space-around',
          padding: 10,
        }}>
        <TouchableOpacity style={styles.socialIcons}>
          <IconGoogle width={20} height={20} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.socialIcons}>
          <IconApple width={20} height={20} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.socialIcons}>
          <IconFb width={20} height={20} />
        </TouchableOpacity>
      </View>

      <View style={styles.newAcc}>
        <Text style={{fontWeight: '300'}}>Already Registered ?</Text>
        <TouchableOpacity onPress={() => navigation.navigate(Login)}>
          <Text
            style={{
              color: '#4285F4',
              paddingLeft: 5,
              textDecorationLine: 'underline',
            }}>
            Login
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
    paddingHorizontal: 43,
  },
  heading: {
    marginBottom: 52,
    marginTop: 116,
    justifyContent: 'center',
    alignItems: 'center',
  },
  fullName: {
    flexDirection: 'row',
    width: 340,
    height: 52,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'white',
    paddingHorizontal: 10,
    marginTop: 25,
    alignItems: 'center',
  },
  btn: {
    height: 51,
    width: 330,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4285F4',
    borderRadius: 10,
    marginTop: 49,
  },
  newAcc: {
    flexDirection: 'row',
    paddingTop: 29,
    alignItems: 'center',
    justifyContent: 'center',
  },
  socialIcons: {
    width: 60,
    height: 41,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Sign_up;
