import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';

function Category(props) {
  return (
    <TouchableOpacity>
      <View style={styles.container}>
        <Text style={styles.textCat}>{props.text}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#5fa1a5',
    // marginHorizontal: 8,
    marginVertical: 11,
    borderRadius: 5,
  },
  textCat: {
    paddingHorizontal: 10,
    paddingVertical: 6,
    color: '#EEE',
    fontSize: 22,
  },
});

export default Category;
