import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import SearchTiles from './../Components/SearchTiles';
import SearchBar from './../Components/SearchBar';
import {fontStyle} from '../config/fontStyle';

function Search(props) {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <SearchBar iconName="search" placeholder="Search Courses" />
        <Text style={[fontStyle.whiteMedium24Poppins, {marginTop: 60}]}>
          Popular
        </Text>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            marginTop: 16,
            paddingHorizontal: 8,
          }}>
          <SearchTiles
            title="Photography"
            source={{
              uri: 'https://images.pexels.com/photos/7786928/pexels-photo-7786928.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            }}
            onPress={() => navigation.navigate('Category_Courses')}
          />
          <SearchTiles
            title="Guitar"
            source={{
              uri: 'https://images.pexels.com/photos/1044989/pexels-photo-1044989.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            }}
            onPress={() => navigation.navigate('Category_Courses')}
          />
          <SearchTiles
            title="Accounts"
            source={{
              uri: 'https://images.pexels.com/photos/5412/water-blue-ocean.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            }}
            onPress={() => navigation.navigate('Category_Courses')}
          />
          <SearchTiles
            title="Accounts"
            source={{
              uri: 'https://images.pexels.com/photos/3374210/pexels-photo-3374210.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            }}
            onPress={() => navigation.navigate('Category_Courses')}
          />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 52,
    paddingHorizontal: 32,
    backgroundColor: '#191414',
  },
  sectionHeader: {
    fontWeight: '800',
    fontSize: 18,
    color: '#f4f4f4',
    marginTop: 20,
    marginBottom: 5,
  },
  item: {
    margin: 10,
  },
  itemPhoto: {
    width: 200,
    height: 200,
  },
  itemText: {
    color: 'rgba(255, 255, 255, 0.5)',
    marginTop: 5,
  },
});

export default Search;
