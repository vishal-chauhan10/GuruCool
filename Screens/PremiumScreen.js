import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {TouchableNativeFeedback} from 'react-native-gesture-handler';

function PremiumScreen({navigation}) {
  return (
    <View style={styles.container}>
      <View style={{padding: 16}}>
        <Icon size={32} name="long-arrow-left" color={'#fff'} />
      </View>

      <View style={styles.start}>
        <Text style={{color: '#EEEEEE', fontSize: 33, paddingTop: 54}}>
          Start your Membership
        </Text>
        <Text style={{color: '#EEEEEE', fontSize: 20, paddingTop: 33}}>
          Get unlimited access to thousands of
        </Text>
        <Text style={{color: '#EEEEEE', fontSize: 20, paddingTop: 3}}>
          classes on-demand and on-the-go.
        </Text>
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
          marginTop: 235,
        }}>
        <View style={styles.blackbox}>
          <TouchableNativeFeedback>
            <View style={styles.bluebox}>
              <Text style={{color: 'black', fontSize: 24, fontWeight: '500'}}>
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
    backgroundColor: '#222831',
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
  blackbox: {
    backgroundColor: 'black',
    width: 428,
    height: 102,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bluebox: {
    width: 380,
    height: 58,
    backgroundColor: '#33B0BD',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default PremiumScreen;
