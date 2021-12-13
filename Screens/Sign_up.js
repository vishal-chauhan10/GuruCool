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
import FontAwesome from 'react-native-vector-icons/FontAwesome';

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

      <View
        style={{
          paddingTop: 77,
          alignItems: 'center',
          flexDirection: 'row',
          paddingHorizontal: 10,
        }}>
        <FontAwesome
          name="user-o"
          style={{padding: 5}}
          color="#fff"
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
          placeholder="Full Name"
          onChangeText={val => textInputChange(val)}
        />
      </View>

      <View style={styles.fullName}>
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
            borderWidth: 1,
            borderColor: '#fff',
          }}
          placeholder="Email"
          // onChange={e => {
          //   setUsernameReg(e.target.value);
          // }}
        />
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
            borderRadius: 10,
            borderWidth: 1,
            borderColor: '#fff',
          }}
          secureTextEntry={data.secureTextEntry ? true : false}
          onChangeText={val => handlePasswordChange(val)}
          placeholder="Password"
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
      <View style={{alignItems: 'center', paddingTop: 30, paddingBottom: 10}}>
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
  },
  heading: {
    // marginTop: 156,
    marginTop: 116,
    justifyContent: 'center',
    alignItems: 'center',
  },
  fullName: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingTop: 25,
    alignItems: 'center',
  },
  btn: {
    // padding: 10,
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

export default Sign_up;
