import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {RadioButton} from 'react-native-paper';

function Radio_Btn(props) {
  const [checked, setChecked] = React.useState('first');
  return (
    <View style={styles.container}>
      <Text style={styles.qstn}>{props.qstn}</Text>
      <View style={styles.qstn1}>
        <RadioButton
          text="yes"
          value="first"
          status={checked === 'first' ? 'checked' : 'unchecked'}
          onPress={() => setChecked('first')}
        />
        <Text style={{color: '#000', fontSize: 22, fontWeight: '500'}}>
          Yes
        </Text>
      </View>
      <View style={styles.qstn1}>
        <RadioButton
          value="second"
          status={checked === 'second' ? 'checked' : 'unchecked'}
          onPress={() => setChecked('second')}
        />
        <Text style={{color: '#000', fontSize: 22, fontWeight: '500'}}>No</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, marginLeft: 15, marginTop: 10},
  qstn: {
    color: '#000',
    fontSize: 22,
    fontWeight: '500',
  },
  qstn1: {
    flexDirection: 'row',
  },
});

export default Radio_Btn;
