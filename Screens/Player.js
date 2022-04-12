import React from 'react';
import {View, StyleSheet} from 'react-native';
import VideoPlayer from 'react-native-video-player';

function Player(props) {
  return (
    <View style={{flex: 1, backgroundColor: '#191414'}}>
      {/* <Video
        source={video} // the video file
        paused={false} // make it start
        style={styles.backgroundVideo} // any style you want
        repeat={true} // make it a loop
      /> */}
      <VideoPlayer
        // style={{transform: [{rotate: '90deg'}]}}
        video={{
          uri: props.data.link,
        }}
        videoWidth={1600}
        videoHeight={900}
        showDuration={true}
        resizeMode="contain"
        // fullScreenOnLongPress={true}
        // thumbnail={{uri: 'https://i.picsum.photos/id/866/1600/900.jpg'}}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  backgroundVideo: {
    width: 200,
    height: 200,
  },
});

export default Player;
