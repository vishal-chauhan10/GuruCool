import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
// import Logi_n from './Logi_n';
import Home from './Home';
import Sign_up from './Sign_up';
import ChangePass from './Profile/ChangePass';
import PremiumScreen from './Courses/PremiumScreen';
import MyProfile from './Profile/MyProfile';
import FAQs from './Profile/FAQs';
import Aboutus from './Profile/Aboutus';
import Download from './Profile/Download';
import Feather from 'react-native-vector-icons/Feather';

function Login({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.heading}>
        <Text style={{fontSize: 30, fontWeight: '700', color: '#fff'}}>
          Welcome to GuruCool
        </Text>
      </View>

      <View style={{paddingTop: 77, alignItems: 'center'}}>
        <TextInput
          style={{
            width: 341,
            height: 51,
            backgroundColor: '#191414',
            borderRadius: 10,
            borderColor: 'white',
            borderWidth: 1,
          }}
          placeholder="Full Name"
          placeholderTextColor="#fff"
          // onChange={e => {
          //   setUsernameReg(e.target.value);
          // }}
        />
        <Feather name="check-circle" color="green" size={20} />
      </View>

      <View style={styles.fullName}>
        <TextInput
          style={{
            width: 341,
            height: 51,
            backgroundColor: '#191414',
            borderRadius: 10,
            borderWidth: 1,
            borderColor: '#fff',
          }}
          placeholder="Password"
          placeholderTextColor="#fff"
          // onChange={e => {
          //   setUsernameReg(e.target.value);
          // }}
        />
      </View>
      <TouchableOpacity style={{paddingLeft: 249, paddingTop: 11}}>
        <Text>Recovery Password</Text>
      </TouchableOpacity>

      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => navigation.navigate(Download)}>
          <Text style={{fontSize: 25, color: '#fff'}}>Login</Text>
        </TouchableOpacity>
      </View>

      <View style={{alignItems: 'center', paddingTop: 107}}>
        <Text style={{color: '#fff', fontWeight: '200', fontSize: 16}}>
          Or continue with
        </Text>
      </View>

      <View style={styles.newAcc}>
        <Text style={{fontWeight: '300'}}>Not a member ?</Text>
        <TouchableOpacity onPress={() => navigation.navigate(Sign_up)}>
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
    paddingTop: 25,
    alignItems: 'center',
  },
  btn: {
    padding: 10,
    width: 250,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4285F4',
    borderRadius: 10,
    marginTop: 35,
  },
  newAcc: {
    flexDirection: 'row',
    paddingTop: 70,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Login;
