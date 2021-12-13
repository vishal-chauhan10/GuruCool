import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Freqs(props) {
  return (
    <View style={styles.container}>
      <View style={styles.qstn}>
        <Icon size={32} name="caret-right" color={'#fff'} />
        <Text style={{fontSize: 21, color: '#fff', fontWeight: '300'}}>
          {props.question}
        </Text>
      </View>
      <View style={{paddingHorizontal: 46, paddingTop: 11}}>
        <Text style={{color: 'white', fontSize: 15, fontWeight: '300'}}>
          {props.answer}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 19,
  },
  qstn: {
    flexDirection: 'row',
    paddingTop: 62,
    // paddingHorizontal: 19,
    justifyContent: 'space-around',
  },
});
