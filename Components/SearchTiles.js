import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

function SearchTiles(props) {
  return (
    // <View style={styles.container}>
    <TouchableOpacity style={{marginTop: 16}} onPress={props.onPress}>
      <View
        style={{
          width: 154,
          height: 82,
          backgroundColor: 'grey',
          borderRadius: 10,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{fontSize: 22, fontWeight: '500', color: '#fff'}}>
          {props.title}
        </Text>
      </View>
    </TouchableOpacity>
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    marginTop: 32,
    paddingHorizontal: 8,
  },
});

export default SearchTiles;
