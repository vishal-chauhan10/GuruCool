import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ToastAndroid,
} from 'react-native';

import FullName from '../Components/FullName';
import Password from '../Components/Password';
import LinearGradient from 'react-native-linear-gradient';
import IconGoogle from '../Svg_Components/IconGoogle';
import IconApple from './../Svg_Components/IconApple';
import IconFb from './../Svg_Components/IconFb';
import {data} from './../data/courseDetails';

import {authenticate} from '../api/apiCalls';
import {getItem, setItem} from '../data/storage';

function Login({navigation}) {
  const [onChange, setOnChange] = React.useState({
    email: '',
    password: '',
  });

  return (
    <View style={styles.container}>
      <View style={styles.heading}>
        <Text style={{fontSize: 30, fontWeight: '700', color: '#fff'}}>
          Welcome to GuruCool
        </Text>
      </View>

      <FullName
        iconName="mail"
        placeholder="Email"
        onChange={event => {
          setOnChange({...onChange, email: event.nativeEvent.text});
        }}
      />

      <Password
        iconName="lock"
        placeholder="Password"
        onChange={event => {
          setOnChange({...onChange, password: event.nativeEvent.text});
        }}
      />

      <TouchableOpacity style={{alignSelf: 'flex-end', paddingTop: 7}}>
        <Text>Recovery Password</Text>
      </TouchableOpacity>

      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <TouchableOpacity
          style={styles.btn}
          onPress={async () => {
            console.log(onChange.email);

            const data = await authenticate(
              onChange.email,
              onChange.password,
            ).then(async res => {
              console.log('Res ', res);
              try {
                if (typeof res === 'object') {
                  await setItem('user', res);
                  await setItem('isSignedIn', 1);
                  const userData = await getItem('user');
                  console.log(userData);
                  navigation.navigate('TabNavigation');
                } else if (res === 'Invalid password') {
                  ToastAndroid.show(
                    'Invalid Email id or Password! Please try again',
                    ToastAndroid.LONG,
                  );
                } else if (res === 'User does not exist') {
                  ToastAndroid.show(
                    'User Does Not Exist with given credentials',
                    ToastAndroid.LONG,
                  );
                }
              } catch (error) {
                console.log('Error in processing the data');
              }
            });

            // await fetch('http://192.168.0.107/students' + onChange.email, {
            //   headers: {
            //     'Content-Type': 'application/json',
            //     Accept: 'application/json',
            //   },
            //   method: 'POST',
            //   body: JSON.stringify({
            //     email: onChange.email,
            //     password: onChange.password,
            //   }),
            // }).catch(e => {
            //   console.log(e);
            // });
          }}>
          <Text style={{fontSize: 25, color: '#fff'}}>Login</Text>
        </TouchableOpacity>
      </View>

      <View
        style={{
          alignItems: 'center',
          paddingTop: 30,
          paddingBottom: 10,
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          marginTop: 47,
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
        <Text style={{fontWeight: '300'}}>Not a member ?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Sign_up')}>
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
    paddingHorizontal: 43,
  },
  heading: {
    paddingBottom: 77,
    marginTop: 156,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn: {
    height: 51,
    width: 325,
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
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 7,
  },
});

export default Login;
