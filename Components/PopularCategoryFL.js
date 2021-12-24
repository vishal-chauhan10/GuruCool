import React from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import CourseTitle from './CourseTitle';
import {data} from '../data/courseDetails';

const numColumns = 2;
function PopularCategoryFL(props) {
  return (
    <FlatList
      style={{
        // flexWrap: 'wrap',
        marginHorizontal: 8,
      }}
      // contentContainerStyle={
      //   {
      //     flexDirection: 'row',
      //     justifyContent: 'space-between',
      //   }
      // }
      // data={formatData(data, numColumns)}
      data={data}
      columnWrapperStyle={{justifyContent: 'space-between'}}
      numColumns={numColumns}
      renderItem={({item}) => (
        <CourseTitle
          source={{uri: item.image}}
          title={item.title}
          onPress={() =>
            props.navigation.navigate('Category_Courses', {
              category: item.category_courses,
            })
          }
        />
      )}
      keyExtractor={item => item.id}
    />
  );
}

export default PopularCategoryFL;
