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
          width: 300,
          height: 49,
          backgroundColor: '#191414',
        }}
        placeholder={props.placeholder}
        onChangeText={val => textInputChange(val)}
      />
      {data.check_textInputChange ? (
        <Animatable.View animation="bounceIn">
          <Feather
            name="check-circle"
            style={{padding: 5}}
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
    width: 340,
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
