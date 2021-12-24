import React from 'react';
import {View, StyleSheet, Image, Text, TouchableOpacity} from 'react-native';

import {fontStyle} from './../config/fontStyle';

function CourseTitle(props) {
  return (
    <TouchableOpacity style={{paddingVertical: 8}} onPress={props.onPress}>
      <View style={styles.container}>
        <Image
          source={props.source}
          style={{
            width: 176,
            height: 114,
            borderRadius: 10,
            borderWidth: 1,
            borderColor: '#fff',
          }}
        />

        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 8,
          }}>
          <Text style={fontStyle.whiteMedium20Poppins}>{props.title}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    // flexDirection: 'column',
  },
});

export default CourseTitle;
// uri: 'https://images.pexels.com/photos/1787220/pexels-photo-1787220.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
