import React from 'react';
import {View, StyleSheet} from 'react-native';
import Description from '../../Components/Description';

function CourseInfo(props) {
  return (
    <View style={styles.container}>
      <Description
        description={
          'Description : This is a simple description that explain the description about the class or blabla bla and then blabla of course.'
        }
        students={1976}
        language={'Marathi'}
        update={'31, Dec 2021'}
        subtitle={'English'}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#191414',
  },
});

export default CourseInfo;
