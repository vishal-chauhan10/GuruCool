import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

function Description(props) {
  return (
    <View style={styles.container}>
      <Text style={{fontSize: 16, letterSpacing: 1}}>{props.description}</Text>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'flex-start',
          marginTop: 24,
        }}>
        <View style={{marginRight: 100}}>
          <View style={{flexDirection: 'column', marginBottom: 24}}>
            <Text style={{fontSize: 16}}>Students</Text>
            <Text style={{color: '#fff', fontSize: 16}}>{props.students}</Text>
          </View>

          <View style={{flexDirection: 'column'}}>
            <Text style={{fontSize: 16}}>Last Update</Text>
            <Text style={{color: '#fff', fontSize: 16}}>{props.update}</Text>
          </View>
        </View>

        <View style={{}}>
          <View style={{flexDirection: 'column', marginBottom: 24}}>
            <Text style={{fontSize: 16}}>Language</Text>
            <Text style={{color: '#fff', fontSize: 16}}>{props.language}</Text>
          </View>

          <View style={{flexDirection: 'column'}}>
            <Text style={{fontSize: 16}}>Subtitle</Text>
            <Text style={{color: '#fff', fontSize: 16}}>{props.subtitle}</Text>
          </View>
        </View>
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

export default Description;
