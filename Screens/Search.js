import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  SafeAreaView,
  FlatList,
  SectionList,
} from 'react-native';
import FullName from './../Components/FullName';
import SearchTiles from './../Components/SearchTiles';

function Search(props) {
  return (
    <View style={styles.container}>
      <FullName iconName="search" placeholder="Search Courses" />
      <Text
        style={{
          fontSize: 22,
          fontWeight: 'bold',
          color: '#fff',
          marginTop: 60,
        }}>
        Popular
      </Text>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          marginTop: 32,
          paddingHorizontal: 8,
        }}>
        <SearchTiles
          title="Accounts"
          onPress={() => navigation.navigate('Category_Courses')}
        />
        <SearchTiles
          title="Accounts"
          onPress={() => navigation.navigate('Category_Courses')}
        />
        <SearchTiles
          title="Accounts"
          onPress={() => navigation.navigate('Category_Courses')}
        />
        <SearchTiles
          title="Accounts"
          onPress={() => navigation.navigate('Category_Courses')}
        />
      </View>
    </View>
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
