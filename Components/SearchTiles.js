import React from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {fontStyle} from '../config/fontStyle';

function SearchTiles(props) {
  return (
    // <View style={styles.container}>
    <TouchableOpacity style={{marginTop: 16}} onPress={props.onPress}>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          position: 'relative',
        }}>
        <Image
          style={{
            width: 154,
            height: 90,
            borderRadius: 10,
            justifyContent: 'center',
            alignItems: 'center',
          }}
          source={props.source}
        />

        <Text
          style={[
            fontStyle.whiteMedium20Poppins,
            {
              textAlign: 'center',
              position: 'absolute',
            },
          ]}>
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
