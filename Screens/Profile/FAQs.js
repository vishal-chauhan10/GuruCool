import React from 'react';
import {View, StyleSheet, Text, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Freqs from './../../Components/Freqs';

function FAQs({navigation}) {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.header}>
          <Icon size={32} name="long-arrow-left" color={'#fff'} />
          <Text style={{fontSize: 27, color: '#fff'}}>FAQs</Text>
          <Text></Text>
        </View>
        <Freqs
          question="How to get started with GuruCool?"
          answer="It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. "
        />

        <Freqs
          question="System Requirments"
          answer="It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout."
        />

        <Freqs
          question="Learn more about GuruCool"
          answer="It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. "
        />

        <Freqs
          question="How does GuruCool work?"
          answer="It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout"
        />

        <Freqs
          question="How to be a mentor in GuruCool?"
          answer="It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout"
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: '#fff',
    backgroundColor: '#191414',
    paddingBottom: 25,
  },
  header: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
});

export default FAQs;
