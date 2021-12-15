import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import {TouchableOpacity} from 'react-native-gesture-handler';

function VideoLesson(props) {
  const defaultChildren = (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <Ionicons
          size={34}
          name={'md-play'}
          color={
            props.iconName === 'lock' ? 'rgba(66,133,244, 0.65)' : '#4285F4'
          }
        />

        <View style={{flexDirection: 'column', marginLeft: 12}}>
          <Text style={{fontSize: 19, fontWeight: '500', color: '#fff'}}>
            {props.videoTitle}
          </Text>
          <Text>{props.videoTime}</Text>
        </View>
      </View>
      <Feather
        style={{marginRight: 8}}
        size={24}
        name={props.iconName}
        color={props.iconName === 'lock' ? 'rgba(255,255,255, 0.65)' : '#fff'}
      />
    </View>
  );

  return props.iconName === 'lock' ? (
    <View>{defaultChildren}</View>
  ) : (
    <TouchableOpacity onPress={props.onPress}>
      {defaultChildren}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 16,
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 10,
    height: 62,
    paddingHorizontal: 8,
  },
});

export default VideoLesson;
