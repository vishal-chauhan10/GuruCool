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

import PopularCategoryFL from '../../Components/PopularCategoryFL';
import {useNavigation} from '@react-navigation/native';
import SearchBar from './../../Components/SearchBar';
import {fontStyle} from '../../config/fontStyle';

function Courses({navigation}) {
  const propNavigation = useNavigation();
  return (
    <ScrollView style={{backgroundColor: '#191414'}}>
      <View style={styles.container}>
        <View style={styles.sale}>
          <View style={{flexDirection: 'column'}}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
              }}>
              <View style={styles.alphabets}>
                <Text
                  style={[
                    fontStyle.whiteSemiBold28Poppins,
                    {
                      transform: [{rotate: '-10deg'}],
                    },
                  ]}>
                  S
                </Text>
              </View>
              <View
                style={[styles.alphabets, {transform: [{rotate: '-7deg'}]}]}>
                <Text style={fontStyle.whiteSemiBold28Poppins}>A</Text>
              </View>
              <View style={[styles.alphabets, {transform: [{rotate: '3deg'}]}]}>
                <Text style={fontStyle.whiteSemiBold28Poppins}>L</Text>
              </View>
              <View style={[styles.alphabets, {transform: [{rotate: '7deg'}]}]}>
                <Text style={fontStyle.whiteSemiBold28Poppins}>E</Text>
              </View>
            </View>

            <View
              style={{flexDirection: 'row', justifyContent: 'space-around'}}>
              <Text style={fontStyle.blackBold28Poppins}>30% off</Text>
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
                    style={[
                      fontStyle.whiteRegular22Poppins,
                    ]}>{`Details >`}</Text>
                </View>
              </TouchableNativeFeedback>
            </View>
          </View>
        </View>

        <View style={{paddingTop: 13}}>
          <SearchBar iconName="search" placeholder="Search" />
        </View>

        <View style={{paddingTop: 37}}>
          <Text style={fontStyle.whiteMedium30Poppins}>Categories</Text>
          {/* <Text style={{fontSize: 30, fontWeight: '500'}}>Categories</Text> */}

          <Text
            style={[
              fontStyle.greyLight15Poppins,
              {
                fontSize: 15,
                paddingTop: 2,
                paddingBottom: 15,
                marginLeft: 4,
              },
            ]}>
            6 Results
          </Text>
        </View>

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
    width: 379,
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
    marginHorizontal: 6,
    borderRadius: 5,
    // transform: [{rotate: '-20deg'}],
  },
});

export default Courses;
