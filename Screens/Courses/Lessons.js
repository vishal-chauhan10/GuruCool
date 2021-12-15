import React from 'react';
import {View, StyleSheet} from 'react-native';

function Lessons(props) {
  return (
    <VideoLesson
      iconName={'lock'}
      videoTitle={'Promo Video'}
      videoTime={'2 mins'}
    />
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default Lessons;
