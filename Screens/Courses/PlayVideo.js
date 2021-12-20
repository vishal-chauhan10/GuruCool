import React from 'react';
import {View, StyleSheet} from 'react-native';

function PlayVideo(props) {
  return (
    <View style={styles.container}>
      <Video
        source={video}
        rate={1.0}
        volume={1.0}
        isMuted={false}
        resizeMode="cover"
        shouldPlay={false}
        isLooping={false}
        useNativeControls
        onError={e => console.log('ERROR OCCURED: ', e)}
        style={{width: 300, height: 300}}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default PlayVideo;
