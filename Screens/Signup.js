import React, {useState} from 'react';
import {View, StyleSheet, Text, TextInput, Button} from 'react-native';
import Login from './Login';

function Signup({navigation}) {
  const [usernameReg, setUsernameReg] = useState('');
  const [passwordReg, setPasswordReg] = useState('');
  return (
    <View style={styles.container}>
      <Text style={styles.sign}>Signup</Text>
      <TextInput
        placeholder="Full Name"
        onChange={(e) => {
          setUsernameReg(e.target.value);
        }}
      />

      <Text style={styles.sign}>Email</Text>
      <TextInput placeholder="Email" />

      <Text style={styles.sign}>Password</Text>
      <TextInput
        placeholder="Password"
        onChange={(e) => {
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
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, color: '#000'},
  sign: {
    color: '#000',
  },
});

export default Signup;
