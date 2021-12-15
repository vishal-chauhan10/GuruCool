import React from 'react';
import {View, StyleSheet, Text, Image, ScrollView} from 'react-native';
import {
  TouchableNativeFeedback,
  TouchableOpacity,
} from 'react-native-gesture-handler';
import IconBulb from '../../Svg_Components/IconBulb';
import Aboutus from './Aboutus';
import FAQs from './FAQs';
import Signup from '../Signup';
import LinearGradient from 'react-native-linear-gradient';
import Feather from 'react-native-vector-icons/Feather';
import ProfileList from './../../Components/ProfileList';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Download from './Download';
import MyProfile from './MyProfile';
// import Signup from './../Signup';

function Profile({navigation}) {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: 31,
            marginBottom: 30,
          }}>
          <IconBulb width={30} height={30} />
          <Text
            style={{
              fontSize: 25,
              fontWeight: 'bold',
              color: '#fff',
              marginLeft: 8,
            }}>
            Become a Mentor
          </Text>
        </View>

        <LinearGradient
          style={{
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
            width: 372,
            // height: 218,
            // paddingTop: 27,
            paddingTop: 68,
          }}
          start={{x: 0, y: 0}}
          end={{x: 0, y: 1}}
          locations={[0.1, 0.55]}
          colors={['#4285F4', '#191414']}>
          <View
            style={{
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <View
              style={{
                width: 169,
                height: 169,
                borderRadius: 85,
                backgroundColor: '#fff',
                borderWidth: 1,
                borderColor: 'black',
                overflow: 'hidden',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image
                style={{width: 169, height: 169}}
                source={require('../../Images/Photo.jpeg')}
                resizeMode="cover"
              />
            </View>

            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: 12,
              }}>
              <Text
                style={{
                  fontSize: 30,
                  fontWeight: '700',
                  color: 'white',
                  marginRight: 12,
                }}>
                Vishal Chauhan
              </Text>
              <TouchableOpacity
                onPress={() => navigation.navigate('MyProfile')}>
                <FontAwesome5 name="pen" size={20} color="#fff" />
              </TouchableOpacity>
            </View>
          </View>
        </LinearGradient>

        <View style={{marginTop: 0}}>
          <Text style={{paddingTop: 29}}>Video Preferences</Text>
          <ProfileList
            titleText="Download Options"
            onPress={() => navigation.navigate('Download')}
          />
          <ProfileList titleText="Video playback Options" />

          <Text style={{paddingTop: 29}}>Help and Support</Text>
          <ProfileList
            titleText="About GuruCool"
            onPress={() => navigation.navigate('Aboutus')}
          />
          <ProfileList
            titleText="Frequently Asked Questions"
            onPress={() => navigation.navigate('FAQs')}
          />
          <ProfileList
            titleText="Share the GuruCool App"
            onPress={() => navigation.navigate('Photo_Courses')}
          />
        </View>

        <View style={{marginTop: 50, marginBottom: 10}}>
          <TouchableOpacity
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              // marginTop: 50,
            }}
            onPress={() => navigation.navigate('Signup')}>
            <Text
              style={{
                color: '#F90A18',
                fontSize: 25,
                fontWeight: '700',
              }}>
              Sign Out
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
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
