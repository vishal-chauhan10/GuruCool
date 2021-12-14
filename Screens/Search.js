import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import FullName from './../Components/FullName';

function Search(props) {
  return (
    <View style={styles.container}>
      <FullName iconName="search" placeholder="Search Courses" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 52,
    paddingHorizontal: 32,
    backgroundColor: '#191414',
  },
});

export default Search;
