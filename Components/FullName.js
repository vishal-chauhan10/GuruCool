import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

function FullName(props) {
  const [data, setData] = React.useState({
    username: '',
    password: '',
    check_textInputChange: false,
    secureTextEntry: true,
    isValidUser: true,
    isValidPassword: true,
  });

  const textInputChange = val => {
    if (val.length != 0) {
      setData({
        ...data,
        email: val,
        check_textInputChange: true,
      });
    } else {
      setData({
        ...data,
        email: val,
        check_textInputChange: false,
      });
    }
  };
  return (
    <View style={styles.container}>
      <Feather name={props.iconName} size={20} style={{padding: 5}} />
      <TextInput
        style={{
          width: 264,
          height: 47,
          backgroundColor: '#191414',
        }}
        onChange={props.onChange}
        placeholder={props.placeholder}
        onChangeText={val => textInputChange(val)}
      />
      {data.check_textInputChange ? (
        <Animatable.View style={{}} animation="bounceIn">
          <Feather
            name="check-circle"
            style={{marginLeft: 0}}
            color="green"
            size={20}
          />
        </Animatable.View>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 325,
    height: 52,
    alignItems: 'center',
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 10,
    marginTop: 25,
  },
});

export default FullName;
