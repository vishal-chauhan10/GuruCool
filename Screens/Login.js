import React from 'react';
import {View, StyleSheet, Text, TextInput, Button} from 'react-native';
import Home from './Home';

function Login({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={styles.sign}>Email</Text>
      <TextInput placeholder="Email" />

      <Text style={styles.sign}>Password</Text>
      <TextInput placeholder="Password" />

      <Button
        onPress={() => navigation.navigate(Home)}
        title="Login"
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

export default Login;
