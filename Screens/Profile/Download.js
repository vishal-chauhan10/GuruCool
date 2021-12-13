import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableNativeFeedback,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

function Download(props) {
  return (
    <View style={styles.container}>
      <View style={styles.topLayer}>
        <Icon size={30} name="long-arrow-left" color={'#fff'} />
        <Text
          style={{
            fontSize: 24,
            color: 'white',
            paddingVertical: 8,
            fontWeight: '300',
          }}>
          Downloads
        </Text>
        <TouchableNativeFeedback style={{backgroundColor: 'red'}}>
          <Text
            style={{fontSize: 18, color: 'white', fontWeight: '300'}}></Text>
        </TouchableNativeFeedback>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#191414',
    color: '#fff',
  },
  topLayer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default Download;
