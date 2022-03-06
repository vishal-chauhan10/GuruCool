import React from 'react';
import {View, StyleSheet, Image, Text} from 'react-native';
import {fontStyle} from '../../config/fontStyle';

function ScreenTwo(props) {
  return (
    <View style={styles.container}>
      <Image
        style={{marginTop: 112, marginHorizontal: 50}}
        source={require('../../assets/Splash/icon2img.png')}
      />

      <View style={{marginTop: 40, marginHorizontal: 50}}>
        <Text style={fontStyle.whiteSemiBold35Poppins}>
          Also get an {'\n'}opportunity to be{'\n'}a Mentor
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#191414',
  },
});

export default ScreenTwo;
