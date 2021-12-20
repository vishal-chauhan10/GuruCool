import React from 'react';
import {View, StyleSheet} from 'react-native';
import VideoLesson from './../../Components/VideoLesson';

function Lessons(props) {
  return (
    <View style={styles.container}>
      {props.route.params.lessons.map(function (lesson, index) {
        return (
          <VideoLesson
            key={lesson.id}
            videoTitle={lesson.title}
            iconName={index == 0 ? 'unlock' : 'lock'}
            videoTime={lesson.duration}
            // video ={lessons.link}
            // onPress={() => props.navigation.navigate('PremiumScreen')}
          />
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#191414',
  },
});

export default Lessons;
