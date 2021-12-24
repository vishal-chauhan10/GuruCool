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
import SearchBar from '../../Components/SearchBar';
import Courses_Lessons from '../../Components/Courses_Lessons';
import CategoryCoursesFL from './../../Components/CategoryCoursesFL';
import {useNavigation} from '@react-navigation/native';
import {fontStyle} from '../../config/fontStyle';

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
      <SearchBar iconName="search" placeholder="Search" />

      <Text style={[fontStyle.greyLight14Poppins, {paddingTop: 13}]}>
        Showing search results for "Photography"
      </Text>

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
