import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  Image,
  TouchableNativeFeedback,
  TextInput,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

import ListItem from './../../Components/ListItem';

function Courses({navigation}) {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.sale}>
          <View style={{flexDirection: 'column'}}>
            <View style={{flexDirection: 'row'}}>
              <View style={styles.alphabets}>
                <Text style={{fontSize: 44, color: '#fff', fontWeight: '900'}}>
                  S
                </Text>
              </View>
              <View style={styles.alphabets}>
                <Text style={{fontSize: 44, color: '#fff', fontWeight: '900'}}>
                  A
                </Text>
              </View>
              <View style={styles.alphabets}>
                <Text style={{fontSize: 44, color: '#fff', fontWeight: '900'}}>
                  L
                </Text>
              </View>
              <View style={styles.alphabets}>
                <Text style={{fontSize: 44, color: '#fff', fontWeight: '900'}}>
                  E
                </Text>
              </View>
            </View>

            <View
              style={{flexDirection: 'row', justifyContent: 'space-around'}}>
              <Text style={{color: '#000', fontWeight: '900', fontSize: 30}}>
                30% off
              </Text>
              <TouchableNativeFeedback>
                <View
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: '#000',
                    width: 141,
                    height: 41,

                    borderRadius: 30,
                  }}>
                  <Text
                    style={{color: '#fff', fontWeight: '500', fontSize: 27}}>
                    Details
                  </Text>
                </View>
              </TouchableNativeFeedback>
            </View>
          </View>
        </View>

        <View style={{paddingTop: 33}}>
          <TextInput
            style={{
              width: 373,
              height: 62,
              backgroundColor: '#fff',
              borderRadius: 10,
              borderWidth: 1,
              borderColor: '#fff',
            }}
            placeholder="Search"
            placeholderTextColor="#000"
          />
        </View>

        <View style={{paddingTop: 37}}>
          <Text style={{fontSize: 30, color: '#FFF', fontWeight: '500'}}>
            Popular Courses
          </Text>

          <Text style={{fontSize: 15, paddingTop: 12, paddingBottom: 15}}>
            4 Results
          </Text>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
          <View
            style={{
              width: 174,
              height: 183,
              backgroundColor: 'grey',
              borderBottomEndRadius: 23,
              borderBottomLeftRadius: 23,
            }}></View>
          <View
            style={{
              width: 174,
              height: 183,
              backgroundColor: 'grey',
              borderBottomEndRadius: 23,
              borderBottomLeftRadius: 23,
            }}></View>
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            paddingTop: 25,
          }}>
          <View
            style={{
              width: 174,
              height: 183,
              backgroundColor: 'grey',
              borderBottomEndRadius: 23,
              borderBottomLeftRadius: 23,
            }}></View>
          <View
            style={{
              width: 174,
              height: 183,
              backgroundColor: 'grey',
              borderBottomEndRadius: 23,
              borderBottomLeftRadius: 23,
            }}></View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#191414',
    paddingHorizontal: 17,
  },
  sale: {
    width: 373,
    height: 175,
    backgroundColor: '#30CFD0',
    borderRadius: 27,
    marginTop: 56,
    paddingHorizontal: 28,
  },
  alphabets: {
    width: 41,
    height: 67,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Courses;