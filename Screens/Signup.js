import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  // TouchableNativeFeedback,
} from 'react-native';
import {TouchableNativeFeedback} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';
import Login from './Login';

function Signup({navigation}) {
  const [usernameReg, setUsernameReg] = useState('');
  const [passwordReg, setPasswordReg] = useState('');
  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text style={{color: '#fff', fontSize: 47}}>GuruCOOL</Text>
      </View>
      <View style={styles.subContainer}>
        <View style={styles.header}>
          <Text style={{color: '#fff', fontSize: 30}}>
            Create a new account
          </Text>
          <Text style={{color: '#fff', fontSize: 19}}>It's Free</Text>
        </View>
        <View style={styles.fullName}>
          <TextInput
            style={{
              width: 341,
              height: 51,
              backgroundColor: '#fff',
              borderRadius: 10,
            }}
            placeholder="Full Name"
            placeholderTextColor="#9C9C9C"
            // onChange={e => {
            //   setUsernameReg(e.target.value);
            // }}
          />
        </View>
        <View style={styles.fullName}>
          <TextInput
            style={{
              width: 341,
              height: 51,
              backgroundColor: '#fff',
              borderRadius: 10,
            }}
            placeholder="Email"
            placeholderTextColor="#9C9C9C"
            // onChange={e => {
            //   setUsernameReg(e.target.value);
            // }}
          />
        </View>
        <View style={styles.fullName}>
          <TextInput
            style={{
              width: 341,
              height: 51,
              backgroundColor: '#fff',
              borderRadius: 10,
            }}
            placeholder="Password"
            placeholderTextColor="#9C9C9C"
            // onChange={e => {
            //   setUsernameReg(e.target.value);
            // }}
          />
        </View>
        <View style={styles.fullName}>
          <TextInput
            style={{
              width: 341,
              height: 51,
              backgroundColor: '#fff',
              borderRadius: 10,
            }}
            placeholder="Confirm Password"
            placeholderTextColor="#9C9C9C"
            // onChange={e => {
            //   setUsernameReg(e.target.value);
            // }}
          />
        </View>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => navigation.navigate(Login)}>
          <Text style={{fontSize: 25, color: '#fff'}}>Sign Up</Text>
        </TouchableOpacity>
        <View style={styles.newAcc}>
          <Text>Already Registered ?</Text>
          <TouchableOpacity>
            <Text
              style={{
                color: '#33B0BD',
                paddingLeft: 5,
                textDecorationLine: 'underline',
              }}>
              Login
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: 'row',
            width: '100%',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingVertical: 25,
            paddingHorizontal: 44,
          }}>
          <View style={{borderRadius: 10}}>
            <TouchableNativeFeedback>
              <View style={styles.social_btn}>
                <Icon size={32} name="google" color={'#fff'} />
                <Text style={{fontSize: 24, color: '#fff', paddingLeft: 10}}>
                  Google
                </Text>
              </View>
            </TouchableNativeFeedback>
          </View>

          <TouchableNativeFeedback>
            <View style={[styles.social_btn, {backgroundColor: '#2F43AB'}]}>
              <Icon size={32} name="facebook" color={'#fff'} />
              <Text style={{fontSize: 24, color: '#fff', paddingLeft: 10}}>
                Facebook
              </Text>
            </View>
          </TouchableNativeFeedback>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, color: '#EEEEEE', backgroundColor: '#222831'},
  subContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  sign: {
    color: '#000',
  },
  title: {
    marginLeft: 138,
    marginTop: 50,
  },
  header: {
    marginTop: 114,
    justifyContent: 'center',
    alignItems: 'center',
  },
  fullName: {
    // margin: 23,
    paddingTop: 23,

    alignItems: 'center',
  },
  btn: {
    padding: 10,
    width: 250,
    alignItems: 'center',
    backgroundColor: '#00ADB5',
    borderRadius: 15,
    marginTop: 33,
  },
  newAcc: {
    flexDirection: 'row',
    marginTop: 5,
  },
  social_btn: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    width: 155,
    height: 55,
    borderRadius: 10,
    backgroundColor: '#F54710',
  },
});

export default Signup;

{
  /* <Text style={styles.sign}>Signup</Text>
      <TextInput
        placeholder="Full Name"
        onChange={e => {
          setUsernameReg(e.target.value);
        }}
      />

      <Text style={styles.sign}>Email</Text>
      <TextInput placeholder="Email" />

      <Text style={styles.sign}>Password</Text>
      <TextInput
        placeholder="Password"
        onChange={e => {
          setPasswordReg(e.target.value);
        }}
      />

      <Text style={styles.sign}>C. Password</Text>
      <TextInput placeholder="C. Password" />

      <Button
        onPress={() => navigation.navigate(Login)}
        title="SignUp"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      /> */
}
