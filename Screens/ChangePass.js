import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
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
          Change Password
        </Text>
        <TouchableNativeFeedback style={{backgroundColor: 'red'}}>
          <Text style={{fontSize: 18, color: 'white', fontWeight: '300'}}>
            Done
          </Text>
        </TouchableNativeFeedback>
      </View>

      <View>
        <Text
          style={{
            fontSize: 20,
            marginTop: 65,
            paddingLeft: 15,
            textDecorationLine: 'underline',
          }}>
          Enter a new password
        </Text>
      </View>

      <View style={styles.fullName}>
        <TextInput
          style={{
            width: 341,
            height: 51,
            backgroundColor: '#C4C4C4',
            borderRadius: 10,
            color: 'black',
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
            backgroundColor: '#C4C4C4',
            borderRadius: 10,
            color: 'black',
          }}
          secureTextEntry={true}
          placeholder="Confirm New Password"
          placeholderTextColor="#9C9C9C"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: '#EEEEEE',
    backgroundColor: '#222831',
    paddingVertical: 10,
    paddingHorizontal: 13,
  },
  topLayer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  fullName: {
    paddingTop: 43,
    alignItems: 'center',
  },
});

export default ChangePass;
