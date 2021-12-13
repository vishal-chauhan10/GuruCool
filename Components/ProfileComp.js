import React from 'react';
import {View, StyleSheet, Text, TouchableNativeFeedback} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

function ProfileComp(props) {
  return (
    // <TouchableNativeFeedback>
    <View style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
        }}>
        <Icon size={28} name={props.icon1} color={'#fff'} />
        <Text
          style={{
            fontSize: 25,
            color: 'white',
            paddingLeft: 20,
            fontWeight: '300',
          }}>
          {props.title}
        </Text>
      </View>
      <View>
        <Icon size={30} name="right" color={'#fff'} />
      </View>
    </View>
    // </TouchableNativeFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: 24,
    paddingVertical: 18,
    justifyContent: 'space-between',
  },
});

export default ProfileComp;
