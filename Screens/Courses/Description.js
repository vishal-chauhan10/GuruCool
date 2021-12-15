import React from 'react';
import {View, StyleSheet} from 'react-native';

function Description(props) {
  return (
    <Description
      description={
        'Description : This is a simple description that explain the description about the class or blabla bla and then blabla of course.'
      }
      students={1976}
      language={'Marathi'}
      update={'31, Dec 2021'}
      subtitle={'English'}
    />
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default Description;
