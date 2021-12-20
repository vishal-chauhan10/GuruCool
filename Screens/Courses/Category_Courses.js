import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {Path} from 'react-native-svg';
import FullName from '../../Components/FullName';
import Courses_Lessons from '../../Components/Courses_Lessons';
import CategoryCoursesFL from './../../Components/CategoryCoursesFL';
import {useNavigation} from '@react-navigation/native';

function Photo_Courses({navigation, route}) {
  const propNavigation = useNavigation();
  console.log('DATA in Category_Courses: ', route.params.category);
  return (
    <View style={styles.container}>
      <View>
        <TouchableOpacity onPress={() => navigation.navigate('Courses')}>
          <AntDesign
            size={25}
            name="left"
            style={{paddingTop: 30, marginBottom: 16}}
          />
        </TouchableOpacity>
      </View>
      <FullName iconName="search" placeholder="Search" />

      <Text style={{paddingTop: 13}}>
        Showing search results for "Photography"
      </Text>
      {/* <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          flexWrap: 'wrap',
          marginTop: 36,
        }}>
        <Courses_Lessons
          source={{
            uri: 'https://images.pexels.com/photos/1787220/pexels-photo-1787220.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
          }}
          title="Potrait Photography"
          onPress={() => navigation.navigate('Course_View')}
        />

        <Courses_Lessons
          source={{
            uri: 'https://images.pexels.com/photos/1787220/pexels-photo-1787220.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
          }}
          title="Potrait Photography"
        />
        <Courses_Lessons
          source={{
            uri: 'https://images.pexels.com/photos/1787220/pexels-photo-1787220.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
          }}
          title="Potrait Photography"
        />

        <Courses_Lessons
          source={{
            uri: 'https://images.pexels.com/photos/1787220/pexels-photo-1787220.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
          }}
          title="Potrait Photography"
        />
      </View> */}
      <CategoryCoursesFL
        data={route.params.category}
        navigation={propNavigation}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#191414',
    paddingHorizontal: 32,
  },
});

export default Photo_Courses;
