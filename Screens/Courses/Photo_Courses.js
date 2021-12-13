import React from 'react';
import {View, StyleSheet, Text, TextInput} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import {Path} from 'react-native-svg';

function Photo_Courses({navigation}) {
  return (
    <View style={styles.container}>
      <View style={{paddingTop: 33, paddingBottom: 37}}>
        <TextInput
          style={{
            width: 373,
            height: 62,
            borderRadius: 10,
            borderWidth: 1,
            borderColor: '#fff',
          }}
          placeholder="Search"
          placeholderTextColor="#fff"
        />
        <Text style={{paddingTop: 13}}>
          Showing search results for "Photography"
        </Text>
      </View>

      <View
        style={{
          width: 151,
          height: 121,
          backgroundColor: 'grey',
          borderRadius: 8,
        }}></View>
      <Text style={{paddingTop: 4, color: '#fff'}}>Potrait Photography</Text>
      <View style={{flexDirection: 'row', paddingTop: 4}}>
        <Feather name="user" style={{padding: 5}} color="white" size={20} />
        <Text style={{color: '#FFF', fontSize: 15, paddingTop: 5}}>
          Jojo Dojo
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#191414',
    paddingHorizontal: 17,
  },
});

export default Photo_Courses;
