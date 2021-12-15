import React from 'react';
import {View, StyleSheet, Image, Text, TouchableOpacity} from 'react-native';

function CourseTitle(props) {
  return (
    <TouchableOpacity style={{paddingVertical: 12}} onPress={props.onPress}>
      <View style={styles.container}>
        <View style={{width: 174, height: 137}}>
          <Image source={props.source} style={{width: 174, height: 137}} />
        </View>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Text style={{fontSize: 25, color: '#000', fontWeight: '500'}}>
            {props.title}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 174,
    height: 183,
    backgroundColor: 'grey',
    borderBottomEndRadius: 23,
    borderBottomLeftRadius: 23,
    flexDirection: 'column',
  },
});

export default CourseTitle;
// uri: 'https://images.pexels.com/photos/1787220/pexels-photo-1787220.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
