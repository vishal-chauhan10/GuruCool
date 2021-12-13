import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableNativeFeedback,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

function MyProfile(props) {
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
          Profile
        </Text>
        <TouchableNativeFeedback style={{backgroundColor: 'red'}}>
          <Text style={{fontSize: 18, color: 'white', fontWeight: '300'}}>
            Done
          </Text>
        </TouchableNativeFeedback>
      </View>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image
          style={styles.dp}
          source={{
            uri: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
          }}
        />
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
          placeholder="First Name"
          placeholderTextColor="#9C9C9C"
        />
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
          placeholder="Last Name"
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
          placeholder="Mobile"
          placeholderTextColor="#9C9C9C"
        />
      </View>

      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 83,
        }}>
        <TouchableNativeFeedback>
          <Text
            style={{
              fontSize: 20,
              color: 'white',
              fontWeight: '500',
              color: '#D4FC79',
            }}>
            Change Password
          </Text>
        </TouchableNativeFeedback>
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
  dp: {
    marginTop: 54,
    width: 153,
    height: 147,
    borderRadius: 100 / 2,
  },
  fullName: {
    paddingTop: 43,
    paddingLeft: 3,
    alignItems: 'center',
  },
});

export default MyProfile;
