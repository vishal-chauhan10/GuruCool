import React from 'react';

import {StyleSheet, Text, View, FlatList} from 'react-native';
import Courses_Lessons from './Courses_Lessons';

export default function CategoryCoursesFL(props) {
  return (
    // <View style={{flex: 1, flexWrap: 'wrap', marginTop: 36}}>
    <FlatList
      style={{width: '100%', flexWrap: 'wrap', marginTop: 36}}
      contentContainerStyle={{
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
      }}
      data={props.data}
      //   numColumns={2}
      //   horizontal={false}
      renderItem={({item}) => {
        return (
          <Courses_Lessons
            source={{uri: item.image}}
            title={item.title}
            // title={item.title.subString(0, 6)}
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
    // </View>
  );
}

const styles = StyleSheet.create({});
