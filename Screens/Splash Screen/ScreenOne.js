import React from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';
import {fontStyle} from '../../config/fontStyle';

function ScreenOne(props) {
  return (
    <View style={styles.container}>
      {/* <View style={{marginTop: 24, paddingLeft: 257}}>
        <Text
          style={{
            fontFamily: 'ReggaeOne-Regular',
            fontSize: 25,
            color: '#fff',
          }}>
          guru<Text style={fontStyle.blueRegular25ReggaeOne}>COOL</Text>
        </Text>
      </View> */}
      <Image
        style={{marginTop: 75}}
        source={require('../../assets/Splash/icon1img.png')}
      />

      <View style={{paddingHorizontal: 20}}>
        <Text style={fontStyle.whiteRegular39Poppins}>
          Lets’s Start {'\n'}Learning What You {'\n'}
          <Text style={fontStyle.whiteSemiBold50Poppins}>Love !</Text>
        </Text>
      </View>

      <View style={{paddingHorizontal: 48, marginTop: 126}}>
        <Text style={fontStyle.greyExtraLight37Poppins}>Learn on the go !</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#191414',
    // paddingHorizontal: 14,
  },
});

export default ScreenOne;
