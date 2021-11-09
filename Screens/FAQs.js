import React from 'react';
import {View, StyleSheet, Text, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Freqs from './../Components/Freqs';

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
          question="How do I apply for Mentor?"
          answer="It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here,"
        />

        <Freqs
          question="How do I apply for Mentor?"
          answer="It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here,"
        />

        <Freqs
          question="How do I apply for Mentor?"
          answer="It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here,"
        />

        <Freqs
          question="How do I apply for Mentor?"
          answer="It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here,"
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: '#EEEEEE',
    backgroundColor: '#222831',
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