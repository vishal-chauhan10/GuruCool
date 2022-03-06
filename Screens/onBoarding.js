import React from 'react';
import {View, StyleSheet, Text, Image, TouchableOpacity} from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';

// const Skip = ({...props}) => {
//   <TouchableOpacity>
//     {...props}
//     <Text>Skip</Text>
//   </TouchableOpacity>;
// };

function onBoarding({navigation}) {
  return (
    <View style={styles.container}>
      <Onboarding
        // SkipButtonComponent={Skip}
        onSkip={() => navigation.replace('Login')}
        onDone={() => navigation.navigate('Sign_up')}
        pages={[
          {
            backgroundColor: '#191414',
            image: <Image source={require('../assets/SplashScreen1.png')} />,
            title: '',
            subtitle: ' ',
          },
          {
            backgroundColor: '#191414',
            image: <Image source={require('../assets/SplashScreen2.png')} />,
            title: 'Onboarding',
            subtitle: 'Done with React Native Onboarding Swiper',
          },
          {
            backgroundColor: '#191414',
            image: <Image source={require('../assets/SplashScreen3.png')} />,
            title: 'Onboarding',
            subtitle: 'Done with React Native Onboarding Swiper',
          },
        ]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default onBoarding;
