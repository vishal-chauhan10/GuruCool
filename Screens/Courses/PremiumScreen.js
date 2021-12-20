import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {TouchableNativeFeedback} from 'react-native-gesture-handler';

function PremiumScreen({navigation}) {
  return (
    <View style={styles.container}>
      <View style={{padding: 8}}>
        <TouchableOpacity onPress={() => navigation.navigate('Course_View')}>
          <AntDesign
            size={25}
            name="left"
            style={{paddingTop: 14, paddingLeft: 14}}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.start}>
        <Text
          style={{
            color: '#fff',
            fontWeight: '600',
            fontSize: 33,
            paddingTop: 54,
          }}>
          Start your Membership
        </Text>
        <Text
          style={{
            color: '#EEEEEE',
            fontSize: 20,
            fontWeight: '200',
            paddingTop: 33,
          }}>
          As a free user, you can only view
        </Text>
        <Text style={styles.description}>the promo video also</Text>
        <Text style={styles.description}>
          get unlimited access to thousands of
        </Text>
        <Text style={styles.description}>classes on-demand and on-the-go.</Text>
      </View>

      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <View style={styles.box}>
          <Text style={{color: 'black', fontSize: 36, fontWeight: '700'}}>
            ₹1,369.00/year
          </Text>
          <Text style={{color: 'black', fontSize: 20, fontWeight: '300'}}>
            Just 114.00/month
          </Text>
        </View>
      </View>
      <View
        style={{
          // flexDirection: 'column',
          // justifyContent: 'flex-end',
          marginTop: 175,
        }}>
        <View style={styles.blackbox}>
          <TouchableNativeFeedback>
            <View style={styles.bluebox}>
              <Text style={{color: 'white', fontSize: 24, fontWeight: '500'}}>
                Start your Membership
              </Text>
            </View>
          </TouchableNativeFeedback>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: '#EEEEEE',
    backgroundColor: '#191414',
  },
  start: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    backgroundColor: 'white',
    width: 372,
    height: 152,
    marginTop: 90,
    // marginLeft: 19,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    borderColor: 'black',
    borderWidth: 4,
  },
  description: {
    color: '#EEEEEE',
    fontSize: 20,
    fontWeight: '200',
    paddingTop: 3,
  },
  blackbox: {
    backgroundColor: 'black',
    width: '100%',
    height: 102,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bluebox: {
    width: 380,
    height: 58,
    backgroundColor: '#4285F4',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default PremiumScreen;
