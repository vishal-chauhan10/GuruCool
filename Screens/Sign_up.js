import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Login from './Login';
import Feather from 'react-native-vector-icons/Feather';
import FullName from '../Components/FullName';
import Password from '../Components/Password';
import IconGoogle from '../Svg_Components/IconGoogle';
import IconApple from './../Svg_Components/IconApple';
import IconFb from './../Svg_Components/IconFb';
import LinearGradient from 'react-native-linear-gradient';
import {fontStyle} from './../config/fontStyle';
import {createUser} from '../api/apiCalls';

function Sign_up({navigation}) {
  const [onChange, setOnChange] = React.useState({
    name: '',
    email: '',
    password: '',
  });

  const [data, setData] = React.useState({
    username: '',
    password: '',
    confirm_password: '',
    check_textInputChange: false,
    secureTextEntry: true,
    confirm_secureTextEntry: true,
  });

  const textInputChange = val => {
    if (val.length !== 0) {
      setData({
        ...data,
        username: val,
        check_textInputChange: true,
      });
    } else {
      setData({
        ...data,
        username: val,
        check_textInputChange: false,
      });
    }
  };

  const handlePasswordChange = val => {
    setData({
      ...data,
      password: val,
    });
  };

  const handleConfirmPasswordChange = val => {
    setData({
      ...data,
      confirm_password: val,
    });
  };

  const updateSecureTextEntry = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry,
    });
  };

  const updateConfirmSecureTextEntry = () => {
    setData({
      ...data,
      confirm_secureTextEntry: !data.confirm_secureTextEntry,
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.heading}>
        <Text style={fontStyle.whiteBold30Montserrat}>Register here</Text>
      </View>

      <FullName
        iconName="user"
        placeholder="FullName"
        onChange={event => {
          setOnChange({...onChange, name: event.nativeEvent.text});
        }}
      />
      <FullName
        iconName="mail"
        placeholder="Email"
        onChange={event => {
          setOnChange({...onChange, email: event.nativeEvent.text});
        }}
      />
      <Password
        iconName="lock"
        placeholder="Password"
        onChange={event => {
          setOnChange({...onChange, password: event.nativeEvent.text});
        }}
      />

      <View style={styles.fullName}>
        <Feather name="lock" size={20} />
        <TextInput
          style={{
            width: 268,
            height: 49,
            backgroundColor: '#191414',
            paddingLeft: 7,
          }}
          secureTextEntry={data.confirm_secureTextEntry ? true : false}
          placeholder="Confirm Password"
          onChangeText={val => handleConfirmPasswordChange(val)}
        />
        <TouchableOpacity onPress={updateConfirmSecureTextEntry}>
          {data.confirm_secureTextEntry ? (
            <Feather name="eye-off" color="grey" size={20} />
          ) : (
            <Feather name="eye" color="grey" size={20} />
          )}
        </TouchableOpacity>
      </View>

      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <TouchableOpacity
          style={styles.btn}
          onPress={async () => {
            console.log(onChange.name);
            console.log(onChange.email);
            console.log(onChange.password);

            const data = await createUser(
              onChange.name,
              onChange.email,
              onChange.password,
            ).then(async res => {
              console.log('Res', res);
              try {
                if (typeof res === 'object') {
                  // await setItem('user', res);
                  // await setItem('isSignedIn', 1);
                  const userData = await getItem('user');
                  console.log(userData);
                  navigation.navigate('TabNavigation');
                }
              } catch (error) {
                console.log('Error processing the data');
              }
            });
          }}>
          <Text style={fontStyle.blackMedium26Poppins}>Sign Up</Text>
        </TouchableOpacity>
      </View>

      <View
        style={{
          alignItems: 'center',
          paddingTop: 30,
          paddingBottom: 10,
          flexDirection: 'row',
          justifyContent: 'space-evenly',
        }}>
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          colors={['#191414', '#Fff']}
          style={{
            width: 66,
            height: 1,
            backgroundColor: 'white',
          }}
        />
        <Text style={fontStyle.whiteExtraLight16Poppins}>Or continue with</Text>
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          colors={['#fff', '#191414']}
          style={{
            width: 66,
            height: 1,
            backgroundColor: 'white',
          }}
        />
      </View>

      <View
        style={{
          flexDirection: 'row',
          paddingHorizontal: 55,
          justifyContent: 'space-around',
          padding: 10,
        }}>
        <TouchableOpacity style={styles.socialIcons}>
          <IconGoogle width={20} height={20} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.socialIcons}>
          <IconApple width={20} height={20} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.socialIcons}>
          <IconFb width={20} height={20} />
        </TouchableOpacity>
      </View>

      <View style={styles.newAcc}>
        <Text style={fontStyle.whiteLight15Poppins}>Already Registered ?</Text>
        <TouchableOpacity onPress={() => navigation.navigate(Login)}>
          <Text style={fontStyle.blueLight15Poppins}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#191414',
    paddingHorizontal: 43,
  },
  heading: {
    marginBottom: 52,
    marginTop: 116,
    justifyContent: 'center',
    alignItems: 'center',
  },
  fullName: {
    flexDirection: 'row',
    width: 325,
    height: 52,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'white',
    paddingHorizontal: 6,
    marginTop: 25,
    alignItems: 'center',
  },
  btn: {
    height: 51,
    width: 325,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4285F4',
    borderRadius: 10,
    marginTop: 49,
  },
  newAcc: {
    flexDirection: 'row',
    paddingTop: 29,
    alignItems: 'center',
    justifyContent: 'center',
  },
  socialIcons: {
    width: 60,
    height: 41,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Sign_up;
