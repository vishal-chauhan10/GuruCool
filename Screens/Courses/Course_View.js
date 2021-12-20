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
import Description from '../../Components/Description';
import VideoLesson from '../../Components/VideoLesson';
import Course_View_Navigator from '../../Navigators/Course_View_Navigator';

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
              backgroundColor: 'red',
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
          </View>
          <View style={styles.subContainer}>
            <Text style={{fontSize: 24, fontWeight: '500', color: 'white'}}>
              {data.title}
            </Text>

            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 8,
              }}>
              <Text>{data.duration}</Text>
              <Text style={{marginHorizontal: 16}}>•</Text>
              <Text>{data.mentorName}</Text>
            </View>
            <View style={{flex: 1, backgroundColor: 'transparent'}}>
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
        <TouchableWithoutFeedback
          onPress={() => navigation.navigate('PremiumScreen')}>
          <View
            style={{
              width: 231,
              height: 46,
              backgroundColor: '#4285F4',
              borderRadius: 10,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{fontSize: 20, fontWeight: 'bold', color: '#fff'}}>
              ENROLL NOW
            </Text>
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
