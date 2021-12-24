import React from 'react';
import {
  View,
  StyleSheet,
  TouchableNativeFeedbackBase,
  Text,
} from 'react-native';
import {TouchableNativeFeedback} from 'react-native-gesture-handler';
import Feather from 'react-native-vector-icons/Feather';
import {fontStyle} from './../config/fontStyle';

function ProfileList(props) {
  return (
    <TouchableNativeFeedback style={styles.container} onPress={props.onPress}>
      <Text style={fontStyle.whiteMedium20Poppins}>{props.titleText}</Text>
      <Feather
        name="chevron-right"
        style={{padding: 5}}
        color="white"
        size={25}
      />
    </TouchableNativeFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 10,
  },
});

export default ProfileList;
