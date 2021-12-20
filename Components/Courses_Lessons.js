import React from 'react';
import {View, StyleSheet, Image, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Feather from 'react-native-vector-icons/Feather';

function Courses_Lessons(props) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={{marginTop: 16}} onPress={props.onPress}>
        <View
          style={{
            width: 151,
            height: 121,
            backgroundColor: 'grey',
            borderRadius: 8,
          }}>
          <Image
            source={props.source}
            style={{width: 151, height: 121, borderRadius: 10}}
          />
        </View>
      </TouchableOpacity>
      <Text
        style={{paddingTop: 4, color: '#fff'}}
        numberOfLines={1}
        ellipsizeMode="tail">
        {props.title}
      </Text>

      <View style={{flexDirection: 'row', paddingTop: 4}}>
        <Feather name="user" style={{padding: 5}} color="white" size={20} />
        <Text style={{color: '#FFF', fontSize: 15, paddingTop: 5}}>
          {props.mentor ?? 'Jojo Dojo'}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {width: 151},
});

export default Courses_Lessons;
