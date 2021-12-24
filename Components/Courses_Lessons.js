import React from 'react';
import {View, StyleSheet, Image, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Feather from 'react-native-vector-icons/Feather';
import {fontStyle} from '../config/fontStyle';

function Courses_Lessons(props) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={{marginTop: 16}} onPress={props.onPress}>
        <View
          style={{
            width: 151,
            height: 121,
            // backgroundColor: 'red',
            borderRadius: 8,
            borderWidth: 0.5,
            overflow: 'hidden',
            borderColor: '#fff',
          }}>
          <Image
            source={props.source}
            style={{width: 151, height: 121, borderRadius: 8}}
          />
        </View>
      </TouchableOpacity>
      <Text
        style={[fontStyle.whiteRegular15Poppins, {marginTop: 8}]}
        numberOfLines={1}
        ellipsizeMode="tail">
        {props.title}
      </Text>

      <View style={{flexDirection: 'row', paddingTop: 4}}>
        {/* <Feather name="user" style={{padding: 5}} color="white" size={20} /> */}
        <Image
          source={require('../assets/Images/mentor.png')}
          style={{width: 18, height: 18}}
        />
        <Text style={[fontStyle.whiteRegular14Poppins, {paddingLeft: 6}]}>
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
