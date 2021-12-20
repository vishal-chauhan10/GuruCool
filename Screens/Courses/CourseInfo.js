import React, {useRef} from 'react';
import {View, StyleSheet} from 'react-native';
import Description from '../../Components/Description';

function CourseInfo(props) {
  const video = useRef().current;
  const data = props.route.params.description;

  return (
    <View style={styles.container} ref={video}>
      <Description
        description={data.course_desc}
        students={data.students}
        language={data.language}
        update={data.lastUpdate}
        subtitle={data.subtitles}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#191414',
    marginTop: 25,
  },
});

export default CourseInfo;
