import React from 'react';
import {View, StyleSheet} from 'react-native';
import VideoLesson from './../../Components/VideoLesson';

function Lessons(props) {
  return (
    <View style={styles.container}>
      <VideoLesson
        iconName={'unlock'}
        videoTitle={'Promo Video'}
        videoTime={'2 mins'}
      />

      <VideoLesson
        iconName={'unlock'}
        videoTitle={'Promo Video'}
        videoTime={'2 mins'}
      />

      <VideoLesson
        iconName={'lock'}
        videoTitle={'Promo Video'}
        videoTime={'2 mins'}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#191414',
  },
});

export default Lessons;
