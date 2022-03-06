import React from 'react';
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native-gesture-handler';
import {fontStyle} from '../../config/fontStyle';
import Course_View_Navigator from '../../Navigators/Course_View_Navigator';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Player from './../Player';

const {width} = Dimensions.get('window');

function Course_View({navigation, route}) {
  const data = route.params.data;
  console.log('DATA IN COURSE_VIEW:', data);
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'flex-start',
        flexDirection: 'column',
        backgroundColor: '#191414',
      }}>
      <ScrollView contentContainerStyle={{paddingBottom: 48}}>
        <View style={styles.container}>
          <View
            style={{
              width: width,
              height: 380,
              borderBottomLeftRadius: 45,
              borderBottomRightRadius: 45,
              overflow: 'hidden',
            }}>
            <Image
              source={{
                uri: data.image,
              }}
              style={{
                width: width,
                height: 380,
              }}
              resizeMode="cover"
            />

            {/* back btn */}

            <TouchableOpacity
              style={{
                width: 50,
                height: 50,
                backgroundColor: 'red',
                borderRadius: 25,
                position: 'relative',
                top: 25,
                left: 25,
              }}
              onPress={() => navigation.navigate('Category_Courses')}>
              <AntDesign
                size={25}
                name="left"
                style={{
                  paddingTop: 30,
                  marginBottom: 16,
                  // position: 'absolute',
                }}
              />
            </TouchableOpacity>

            {/* back btn */}
          </View>
          <View style={styles.subContainer}>
            <Text style={fontStyle.whiteMedium30Poppins}>{data.title}</Text>

            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Text style={fontStyle.greyLight14Poppins}>{data.duration}</Text>
              <Text style={{marginHorizontal: 16}}>•</Text>
              <Text style={fontStyle.greyLight14Poppins}>
                {data.mentorName}
              </Text>
              <Text style={{marginHorizontal: 16}}>•</Text>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <AntDesign size={14} name="star" color={'#FF7A18'} />
                <Text
                  style={[
                    fontStyle.greyLight14Poppins,
                    {marginLeft: 6, alignSelf: 'baseline'},
                  ]}>
                  4.5
                </Text>
              </View>
            </View>
            <View style={{flex: 1, backgroundColor: '#191414'}}>
              <Course_View_Navigator
                lessons={data.lessons}
                description={data.description}
              />
            </View>
          </View>
        </View>
      </ScrollView>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          position: 'absolute',
          bottom: 24,
          left: 0,
          right: 0,
        }}>
        <TouchableWithoutFeedback onPress={() => navigation.navigate('Player')}>
          <View
            style={{
              width: 231,
              height: 46,
              backgroundColor: '#4285F4',
              borderRadius: 23,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={fontStyle.whiteMedium24Poppins}>ENROLL NOW</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#191414',
  },
  subContainer: {
    paddingHorizontal: 32,
    marginTop: 24,
    marginBottom: 32,
  },
});

export default Course_View;
