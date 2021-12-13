import React from 'react';
import {View, StyleSheet, Image, Text} from 'react-native';

function ListItem(props) {
  return (
    <View style={styles.item} key={props.key}>
      <Image
        source={{
          uri: props.image,
        }}
        style={styles.itemPhoto}
        resizeMode="cover"
      />
      {/* <Text style={styles.itemText}>{props.text}</Text> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  item: {
    margin: 10,
    flexDirection: 'row',
    // flexGrow: 1,
    // flexWrap: 'wrap',
  },
  itemPhoto: {
    // flexDirection: 'row',
    borderRadius: 5,
    width: 200,
    height: 200,
  },
  // itemText: {
  //   color: '#EEE',
  //   marginTop: 5,
  //   fontWeight: '300',
  //   fontSize: 18,
  // },
});

export default ListItem;
