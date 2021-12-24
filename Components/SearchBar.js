import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

function SearchBar(props) {
  return (
    <View style={styles.container}>
      <Feather name={props.iconName} size={20} style={{padding: 5}} />
      <TextInput
        style={{
          width: 310,
          height: 47,
          backgroundColor: '#191414',
        }}
        placeholder={props.placeholder}
        const
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // width: 379,
    height: 52,
    alignItems: 'center',
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 10,
    marginTop: 25,
  },
});

export default SearchBar;
