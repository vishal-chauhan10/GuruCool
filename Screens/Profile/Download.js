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
import AntDesign from 'react-native-vector-icons/AntDesign';

function Download({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.topLayer}>
        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
          <AntDesign
            size={25}
            name="left"
            style={{paddingTop: 14, paddingLeft: 14}}
          />
        </TouchableOpacity>
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
