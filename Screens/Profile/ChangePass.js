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

function ChangePass({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.topLayer}>
        <Icon size={30} name="long-arrow-left" color={'#fff'} />
        <Text
          style={{
            fontSize: 24,
            color: 'white',
            paddingVertical: 8,
            fontWeight: '300',
          }}>
          New Password
        </Text>
        <TouchableNativeFeedback style={{backgroundColor: 'red'}}>
          <Text
            style={{fontSize: 18, color: 'white', fontWeight: '300'}}></Text>
        </TouchableNativeFeedback>
      </View>

      <View>
        <Text
          style={{
            color: '#fff',
            fontWeight: '700',
            fontSize: 25,
            marginTop: 94,
            paddingLeft: 25,
          }}>
          Set a new password
        </Text>

        <Text style={{paddingTop: 30, fontSize: 18, paddingLeft: 25}}>
          Enter your email and set your new password and do not forget it
        </Text>
      </View>

      <View style={styles.fullName}>
        <TextInput
          style={{
            width: 341,
            height: 51,
            backgroundColor: '#191414',
            borderRadius: 10,
            color: 'white',
            borderWidth: 1,
            borderColor: '#fff',
          }}
          // secureTextEntry={true}
          placeholder="Email"
          placeholderTextColor="#9C9C9C"
        />
      </View>

      <View style={([styles.fullName], {paddingTop: 23, paddingLeft: 24})}>
        <TextInput
          style={{
            width: 341,
            height: 51,
            backgroundColor: '#191414',
            borderRadius: 10,
            color: 'white',
            borderWidth: 1,
            borderColor: '#fff',
          }}
          secureTextEntry={true}
          placeholder="New Password"
          placeholderTextColor="#9C9C9C"
        />
      </View>

      <View style={([styles.fullName], {paddingTop: 23, paddingLeft: 24})}>
        <TextInput
          style={{
            width: 341,
            height: 51,
            backgroundColor: '#191414',
            borderRadius: 10,
            color: 'white',
            borderWidth: 1,
            borderColor: '#fff',
          }}
          secureTextEntry={true}
          placeholder="Confirm New Password"
          placeholderTextColor="#9C9C9C"
        />
      </View>

      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => navigation.navigate(ChangePass)}>
          <Text style={{fontSize: 21, color: '#fff', fontWeight: '500'}}>
            Set New Password
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: '#EEEEEE',
    backgroundColor: '#191414',
    paddingVertical: 10,
    paddingHorizontal: 13,
  },
  topLayer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  fullName: {
    paddingTop: 43,
    paddingLeft: 3,
    alignItems: 'center',
  },
  btn: {
    padding: 10,
    width: 340,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4285F4',
    borderRadius: 10,
    marginTop: 35,
  },
});

export default ChangePass;
