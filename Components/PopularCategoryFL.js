import React from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import CourseTitle from './CourseTitle';

const Popular_Categories = [
  {
    id: '1',
    title: 'Photgraphy',
    image:
      'https://images.pexels.com/photos/1787220/pexels-photo-1787220.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',

    category_courses: [
      {
        id: '1.01',
        title: 'Potrait Photography',
        mentorName: 'Jojo Dojo',
        image:
          'https://images.pexels.com/photos/598917/pexels-photo-598917.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        duration: '1h 30min',
        students: '2.3k',
        lessons: [
          {
            id: 'less1',
            title: 'Promo Video',
            duration: '2mins',
            // link : ""
          },
        ],
        description: {
          course_desc: 'jhjdcwjh jwecjnkjce kjwecnbjbcw',
          students: '2,300',
          language: 'English',
          lastUpdate: 'Nov 10, 2021',
          subtitles: 'English',
        },
      },
      {
        id: '1.01b',
        title: 'Street Photgraphy: Beginner Course',
        image:
          'https://images.pexels.com/photos/598917/pexels-photo-598917.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        duration: '2h ',
        students: '1.3k',
        lessons: [
          {
            id: 'less1',
            title: 'Promo Video',
            duration: '2mins',
            // link : ""
          },
        ],
        description: {
          course_desc: 'jhjdcwjh jwecjnkjce kjwecnbjbcw',
          students: '2,300',
          language: 'English',
          lastUpdate: 'Nov 10, 2021',
          subtitles: 'English',
        },
      },
    ],
  },
  {
    id: '2',
    title: 'Maths',
    image:
      'https://images.pexels.com/photos/10404272/pexels-photo-10404272.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500link',
    category_courses: [
      {
        id: '2.01',
        title: 'Accounts',
        mentorName: 'Mojo Mojo',
        image:
          'https://images.pexels.com/photos/10438631/pexels-photo-10438631.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        duration: '1h 30min',
        students: '2.3k',
        lessons: [
          {
            id: 'less1',
            title: 'Promo Video',
            duration: '2mins',
            // link : ""
          },
        ],
        description: {
          course_desc: 'jhjdcwjh jwecjnkjce kjwecnbjbcw',
          students: '2,300',
          language: 'English',
          lastUpdate: 'Nov 10, 2021',
          subtitles: 'English',
        },
      },
      {
        id: '2.02',
        title: 'CA',
        mentorName: 'Dojo Mojo',
        image:
          'https://images.pexels.com/photos/10438631/pexels-photo-10438631.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        duration: '1h 30min',
        students: '2.3k',
        lessons: [
          {
            id: 'less1',
            title: 'Promo Video',
            duration: '2mins',
            // link : ""
          },
        ],
        description: {
          course_desc: 'jhjdcwjh jwecjnkjce kjwecnbjbcw',
          students: '2,300',
          language: 'English',
          lastUpdate: 'Nov 10, 2021',
          subtitles: 'English',
        },
      },
      {
        id: '2.03',
        title: 'MA',
        mentorName: 'Mojo',
        image:
          'https://images.pexels.com/photos/10438631/pexels-photo-10438631.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        duration: '1h 30min',
        students: '2.3k',
        lessons: [
          {
            id: 'less1',
            title: 'Promo Video',
            duration: '2mins',
            // link : ""
          },
        ],
        description: {
          course_desc: 'jhjdcwjh jwecjnkjce kjwecnbjbcw',
          students: '2,300',
          language: 'English',
          lastUpdate: 'Nov 10, 2021',
          subtitles: 'English',
        },
      },
      {
        id: '2.03',
        title: 'MA',
        mentorName: 'Mojo',
        image:
          'https://images.pexels.com/photos/10438631/pexels-photo-10438631.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        duration: '1h 30min',
        students: '2.3k',
        lessons: [
          {
            id: 'less1',
            title: 'Promo Video',
            duration: '2mins',
            // link : ""
          },
        ],
        description: {
          course_desc: 'jhjdcwjh jwecjnkjce kjwecnbjbcw',
          students: '2,300',
          language: 'English',
          lastUpdate: 'Nov 10, 2021',
          subtitles: 'English',
        },
      },
      {
        id: '2.03',
        title: 'MA',
        mentorName: 'Mojo',
        image:
          'https://images.pexels.com/photos/10438631/pexels-photo-10438631.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        duration: '1h 30min',
        students: '2.3k',
        lessons: [
          {
            id: 'less1',
            title: 'Promo Video',
            duration: '2mins',
            // link : ""
          },
        ],
        description: {
          course_desc: 'jhjdcwjh jwecjnkjce kjwecnbjbcw',
          students: '2,300',
          language: 'English',
          lastUpdate: 'Nov 10, 2021',
          subtitles: 'English',
        },
      },
      {
        id: '2.03',
        title: 'MA',
        mentorName: 'Mojo',
        image:
          'https://images.pexels.com/photos/10438631/pexels-photo-10438631.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        duration: '1h 30min',
        students: '2.3k',
        lessons: [
          {
            id: 'less1',
            title: 'Promo Video',
            duration: '2mins',
            // link : ""
          },
        ],
        description: {
          course_desc: 'jhjdcwjh jwecjnkjce kjwecnbjbcw',
          students: '2,300',
          language: 'English',
          lastUpdate: 'Nov 10, 2021',
          subtitles: 'English',
        },
      },
    ],
  },
];

function PopularCategoryFL(props) {
  return (
    <FlatList
      style={{
        paddingHorizontal: 8,
        flexWrap: 'wrap',
      }}
      contentContainerStyle={{
        flexDirection: 'row',
        justifyContent: 'space-between',
      }}
      data={Popular_Categories}
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

const styles = StyleSheet.create({
  container: {},
});

export default PopularCategoryFL;
