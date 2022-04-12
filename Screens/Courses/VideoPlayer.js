import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ToastAndroid,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import * as yup from 'yup';
import {Formik} from 'formik';

import FullName from '../Components/FullName';
import Password from '../Components/Password';
import LinearGradient from 'react-native-linear-gradient';
import IconGoogle from '../Svg_Components/IconGoogle';
import IconApple from './../Svg_Components/IconApple';
import IconFb from './../Svg_Components/IconFb';
import {data} from './../data/courseDetails';

import {authenticate} from '../api/apiCalls';
import {getItem, setItem} from '../data/storage';
import {login} from '../redux/reducers/auth';

//////////////////////////////////////////////////////////////////////

const loginValidationSchema = yup.object().shape({
  email: yup
    .string()
    .email('Please enter Valid Email')
    .required('Email Address is Required'),
  password: yup
    .string()
    .min(8, ({min}) => `Password must be atleast ${min} character`)
    .required('Password is required')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
      'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character',
    ),
});

/////////////////////////////////////////////////////////////
function Login({navigation}) {
  const [onChange, setOnChange] = React.useState({
    email: '',
    password: '',
  });

  const isSignedIn = useSelector(state => state.auth.isSignedIn);
  const dispatch = useDispatch();
  console.log('Is Signed In from Login.js: ', isSignedIn);

  return (
    //////////////////////////////////////

    // <Formik
    //   initialValues={{email: '', password: ''}}
    //   onSubmit={values => console.log(values)}
    //   validationSchema={loginValidationSchema}>
    //   {({
    //     handleChange,
    //     handleBlur,
    //     handleSubmit,
    //     values,
    //     touched,
    //     errors,
    //     isValid,
    //   }) => (
    /////////////////////////////
    <View style={styles.container}>
      <View style={styles.heading}>
        <Text style={{fontSize: 30, fontWeight: '700', color: '#fff'}}>
          Welcome to GuruCool
        </Text>
      </View>
      <FullName
        iconName="mail"
        placeholder="Email"
        ////////////////////////////////
        // onChangeText={handleChange('email')}
        // onBlur={handleBlur('email')}
        // value={values.email}
        ///////////////////////////////
        onChange={event => {
          setOnChange({...onChange, email: event.nativeEvent.text});
        }}
      />
      /////
      {/* {errors.email && touched.email && (
            <Text style={styles.errors}>{errors.email}</Text>
          )} */}
      //////////////////////
      <Password
        iconName="lock"
        placeholder="Password"
        /////////////////////
        // onChangeText={handleChange('password')}
        // onBlur={handleBlur('password')}
        // value={values.password}
        //////////////////////////////////////
        onChange={event => {
          setOnChange({...onChange, password: event.nativeEvent.text});
        }}
      />
      /////
      {/* {errors.password && touched.password && (
            <Text style={styles.errors}>{errors.password}</Text>
          )} */}
      //////////////////////
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
                  // await setItem('isSignedIn', 1);
                  const userData = await getItem('user');
                  console.log(userData);
                  dispatch(login());
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

    ////////////
    //   )}
    // </Formik>

    //////////
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
  // errors: {
  //   fontSize: 14,
  //   color: 'red',
  //   fontWeight: 'bold',
  //   marginTop: 5,
  // },
});

export default Login;
