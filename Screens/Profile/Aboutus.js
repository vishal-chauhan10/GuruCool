import React from 'react';
import {View, StyleSheet, Text, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Profile from './Profile/';

function Aboutus({navigation}) {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <View style={styles.header}>
        <Icon
          size={30}
          name="long-arrow-left"
          color={'#fff'}
          onPress={() => navigation.navigate('Profile')}
        />
        <Text style={{fontSize: 27, color: '#fff'}}>About Us</Text>
        <Text></Text>
      </View>

      <View
        style={{
          width: '100%',
          height: 1,
          borderColor: 'white',
          borderWidth: 0.5,
        }}
      />
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.txt}>
            What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the
            printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a type
            specimen book. It has survived not only five centuries, but also the
            leap into electronic typesetting, remaining essentially unchanged.
            It was popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem
            Ipsum.
          </Text>

          <Text style={styles.txt}>
            What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the
            printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a type
            specimen book. It has survived not only five centuries, but also the
            leap into electronic typesetting, remaining essentially unchanged.
            It was popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem
            Ipsum.
          </Text>

          <Text style={styles.txt}>
            What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the
            printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a type
            specimen book. It has survived not only five centuries, but also the
            leap into electronic
          </Text>

          <Text style={styles.txt}>
            What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the
            printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an unknown
            printer took a galley but also the leap into electronic
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: '#fff',
    paddingHorizontal: 24,
    paddingVertical: 24,
    backgroundColor: '#191414',
  },
  header: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-start',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#191414',
  },
  txt: {
    paddingTop: 15,
    color: '#fff',
    fontSize: 17,
  },
});

export default Aboutus;
