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
import FullName from '../../Components/FullName';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Profile from './Profile';

function MyProfile({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.topLayer}>
        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
          <AntDesign size={25} name="left" style={{padding: 5}} />
        </TouchableOpacity>
        <Text
          style={{
            fontSize: 24,
            color: 'white',
            paddingVertical: 8,
            fontWeight: '300',
          }}>
          Profile
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
          <Text style={{fontSize: 18, color: 'white', fontWeight: '300'}}>
            Done
          </Text>
        </TouchableOpacity>
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
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <FullName iconName="user" placeholder="First Name" />
        <FullName iconName="user" placeholder="Last Name" />
        <FullName iconName="user" placeholder="Mobile" />
        <FullName iconName="user" placeholder="Email" />
      </View>

      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 83,
        }}>
        <TouchableOpacity>
          <Text
            style={{
              fontSize: 20,
              color: 'white',
              fontWeight: '500',
              color: '#D4FC79',
            }}>
            Change Password
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
