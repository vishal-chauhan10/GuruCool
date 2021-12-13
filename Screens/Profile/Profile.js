import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableNativeFeedbackBase,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import ProfileComp from '../../Components/ProfileComp';
import {TouchableNativeFeedback} from 'react-native-gesture-handler';
import Aboutus from './Aboutus';
import FAQs from './FAQs';
import Signup from '../Signup';
import LinearGradient from 'react-native-linear-gradient';

function Profile({navigation}) {
  return (
    <View style={styles.container}>
      <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']}>
        <Text style={{fontSize: 25, fontWeight: '200', color: '#fff'}}>
          Become a Mentor
        </Text>
      </LinearGradient>
      <View
        style={{
          width: 372,
          height: 218,
          backgroundColor: '#4285F4',
          borderRadius: 30,
          paddingTop: 27,
        }}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 27,
    backgroundColor: '#191414',
  },
});

export default Profile;
