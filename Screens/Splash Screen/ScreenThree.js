import React from 'react';
import {View, StyleSheet, Image, Text} from 'react-native';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import {fontStyle} from '../../config/fontStyle';

function ScreenThree({navigation}) {
  return (
    <View style={styles.container}>
      <Image
        style={{marginTop: 112, marginHorizontal: 85}}
        source={require('../../assets/Splash/icon3img.png')}
      />

      <View style={{marginTop: 12, marginHorizontal: 50}}>
        <Text style={fontStyle.whiteSemiBold35Poppins}>
          GuruCool get’s {'\n'}you where you’re {'\n'}going.
        </Text>
      </View>

      <TouchableWithoutFeedback
        onPress={() => navigation.navigate('Signup')}
        style={{marginHorizontal: 120, marginTop: 60}}>
        <Text style={fontStyle.blueSemiBold35Poppins}>Sign Up {'>'}</Text>
      </TouchableWithoutFeedback>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#191414',
  },
});

export default ScreenThree;
