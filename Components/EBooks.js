import React from 'react';
import {View, Image, StyleSheet, Text} from 'react-native';

function EBooks(props) {
  return (
    <View style={styles.container}>
      <Image source={props.src} style={{width: 40, height: 40}} />
    </View>
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
    color: 'black',
    fontSize: 22,
  },
});

export default EBooks;
