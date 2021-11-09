import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableNativeFeedback,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Home from './Home';
import Signup from './Signup';
import FAQs from './FAQs';
import Aboutus from './Aboutus';
import PremiumScreen from './PremiumScreen';
import ChangePass from './ChangePass';

function Login({navigation}) {
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          paddingTop: 174,
        }}>
        <Text style={styles.title}>Experience a new way</Text>
        <Text style={styles.title}>of Learning</Text>
      </View>

      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          paddingTop: 93,
        }}>
        <Text style={{fontSize: 40, color: 'white'}}>Login here</Text>
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
      <TouchableOpacity
        style={{paddingLeft: 246, paddingTop: 15}}
        onPress={() => navigation.navigate(ChangePass)}>
        <Text style={{fontSize: 16, color: '#fff'}}>Forgot Password</Text>
      </TouchableOpacity>

      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => navigation.navigate('Tabs')}>
          <Text style={{fontSize: 25, color: '#fff'}}>Login</Text>
        </TouchableOpacity>
        <View style={styles.newAcc}>
          <Text>New User ?</Text>
          <TouchableOpacity onPress={() => navigation.navigate(Signup)}>
            <Text
              style={{
                color: '#33B0BD',
                paddingLeft: 5,
                textDecorationLine: 'underline',
              }}>
              Sign Up
            </Text>
          </TouchableOpacity>
        </View>
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
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: '#EEEEEE',
    backgroundColor: '#222831',
  },
  title: {
    color: '#fff',
    fontSize: 33,
  },
  fullName: {
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

export default Login;
