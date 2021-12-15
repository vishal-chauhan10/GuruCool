import React from 'react';
import {View, StyleSheet, Text, TextInput} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import {Path} from 'react-native-svg';
import FullName from '../../Components/FullName';
import Courses_Lessons from '../../Components/Courses_Lessons';

function Photo_Courses({navigation}) {
  return (
    <View style={styles.container}>
      <FullName iconName="search" placeholder="Search" />

      <Text style={{paddingTop: 13}}>
        Showing search results for "Photography"
      </Text>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          flexWrap: 'wrap',
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
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#191414',
    paddingHorizontal: 17,
  },
});

export default Photo_Courses;
