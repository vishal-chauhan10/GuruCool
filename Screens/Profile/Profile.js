import React from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  Image,
  ScrollView,
} from 'react-native';

import IconBulb from '../../Svg_Components/IconBulb';
import LinearGradient from 'react-native-linear-gradient';
import ProfileList from './../../Components/ProfileList';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {fontStyle} from '../../config/fontStyle';
import {setItem} from '../../data/storage';
import RNExitApp from 'react-native-exit-app';
import Sign_up from './../Sign_up';

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
          <IconBulb style={{marginRight: 8}} width={30} height={30} />
          <TouchableOpacity>
            <Text style={fontStyle.whiteLight25Montserrat}>
              Become a Mentor
            </Text>
          </TouchableOpacity>
        </View>
        <LinearGradient
          style={{
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
            width: 356,
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
              <Text style={fontStyle.whiteSemiBold30Poppins}>
                Vishal Chauhan
              </Text>
              <TouchableOpacity
                style={{marginLeft: 12}}
                onPress={() => navigation.navigate('MyProfile')}>
                <FontAwesome5 name="pen" size={20} color="#fff" />
              </TouchableOpacity>
            </View>
          </View>
        </LinearGradient>

        <View style={{marginTop: 24}}>
          <Text style={fontStyle.whiteLight15Poppins}>Video Preferences</Text>
          <ProfileList
            titleText="Download Options"
            onPress={() => navigation.navigate('Download')}
          />
          <ProfileList titleText="Video playback Options" />
          <View style={{marginTop: 29}}>
            <Text style={fontStyle.whiteLight15Poppins}>Help and Support</Text>
          </View>
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

        <View style={{marginTop: 50, marginBottom: 50}}>
          <TouchableOpacity
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              // marginTop: 50,
            }}
            onPress={async () => {
              await setItem('isSignedIn', 0);
              // Exit App
              // navigation.navigate('Sign_up');
              RNExitApp.exitApp();
            }}>
            <Text style={fontStyle.whiteBold20Montserrat}>Sign Out</Text>
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
