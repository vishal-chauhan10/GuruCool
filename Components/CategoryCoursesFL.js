import React from 'react';

import {StyleSheet, Text, View, FlatList} from 'react-native';
import Courses_Lessons from './Courses_Lessons';

export default function CategoryCoursesFL(props) {
  return (
    <FlatList
      style={{width: '100%', flexWrap: 'wrap', marginTop: 36}}
      contentContainerStyle={{
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
      }}
      data={props.data}
      renderItem={({item}) => {
        return (
          <Courses_Lessons
            source={{uri: item.image}}
            title={item.title}
            mentor={item.mentorName}
            onPress={() =>
              props.navigation.navigate('Course_View', {
                data: item,
              })
            }
          />
        );
      }}
      keyExtractor={item => {
        return item.id;
      }}
    />
  );
}

const styles = StyleSheet.create({});
