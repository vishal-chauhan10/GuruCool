import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  Image,
  TouchableNativeFeedback,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

import ListItem from './../../Components/ListItem';
import FullName from './../../Components/FullName';
import CourseTitle from '../../Components/CourseTitle';
import PopularCategoryFL from '../../Components/PopularCategoryFL';
import {useNavigation} from '@react-navigation/native';

function Courses({navigation}) {
  const propNavigation = useNavigation();
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.sale}>
          <View style={{flexDirection: 'column'}}>
            <View style={{flexDirection: 'row'}}>
              <View style={styles.alphabets}>
                <Text
                  style={{
                    fontSize: 44,
                    color: '#fff',
                    fontWeight: '900',
                  }}>
                  S
                </Text>
              </View>
              <View
                style={({transform: [{rotate: '-20deg'}]}, styles.alphabets)}>
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

        <View style={{paddingTop: 13}}>
          <FullName iconName="search" placeholder="Search" />
        </View>

        <View style={{paddingTop: 37}}>
          <Text style={{fontSize: 30, color: '#FFF', fontWeight: '500'}}>
            Popular Categories
          </Text>

          <Text style={{fontSize: 15, paddingTop: 12, paddingBottom: 15}}>
            4 Results
          </Text>
        </View>
        {/* <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            paddingHorizontal: 8,
          }}>
          <CourseTitle
            source={{
              uri: 'https://images.pexels.com/photos/1787220/pexels-photo-1787220.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            }}
            title="Media"
            onPress={() => navigation.navigate('Category_Courses')}
          />

          <CourseTitle
            source={{
              uri: 'https://images.pexels.com/photos/1787220/pexels-photo-1787220.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            }}
            title="Media"
          />

          <CourseTitle
            source={{
              uri: 'https://images.pexels.com/photos/1787220/pexels-photo-1787220.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            }}
            title="Media"
          />
          <CourseTitle
            source={{
              uri: 'https://images.pexels.com/photos/1787220/pexels-photo-1787220.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            }}
            title="Media"
          />

         
        </View> */}
        <PopularCategoryFL navigation={propNavigation} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#191414',
    paddingHorizontal: 16,
  },
  sale: {
    width: 373,
    height: 175,
    backgroundColor: '#30CFD0',
    borderRadius: 27,
    marginTop: 56,
    // marginBottom: 26,
    paddingHorizontal: 28,
  },
  alphabets: {
    width: 41,
    height: 67,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 17,
    marginBottom: 25,
    marginHorizontal: 12,
    // transform: [{rotate: '-20deg'}],
  },
});

export default Courses;
