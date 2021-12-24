import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  View,
  StyleSheet,
  SectionList,
  FlatList,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {data, recomendedCourses} from '../data/courseDetails';
import {fontStyle} from './../config/fontStyle';

const RecomendedItem = ({item, index, separator, navigation}) => (
  <TouchableWithoutFeedback
    onPress={() => {
      const data = item;

      navigation.navigate('CourseNavigator', {
        // navigating into diff screen of parent navigator
        screen: 'Course_View',
        params: {data},
      });
    }}>
    <View style={{marginLeft: index == 0 ? 0 : 10}}>
      <Image style={styles.Recomendedimages} source={{uri: item.image}} />
      <View style={{flexDirection: 'column', justifyContent: 'space-between'}}>
        <View style={{marginBottom: 4, marginTop: 14}}>
          <Text style={fontStyle.whiteRegular20Poppins}>{item.title}</Text>
        </View>
        <View
          style={{
            marginTop: 1,
            marginRight: 4,
            flexDirection: 'row',
          }}>
          <View
            style={{
              width: 24,
              height: 24,
              // backgroundColor: 'red',
              borderRadius: 12,
            }}>
            <Image
              source={require('../assets/Images/mentor.png')}
              style={{width: 24, height: 24}}
            />
          </View>
          <View style={{marginLeft: 8}}>
            <Text style={fontStyle.whiteRegular14Poppins}>
              {item.mentorName}
            </Text>
          </View>
        </View>
      </View>
    </View>
  </TouchableWithoutFeedback>
);

const Item = ({item, index, separator, navigation}) => (
  <TouchableOpacity
    onPress={() => {
      const category = item.category_courses;

      navigation.navigate('CourseNavigator', {
        // navigating into diff screen of parent navigator
        screen: 'Category_Courses',
        params: {category},
      });
    }}>
    <View style={{marginLeft: index == 0 ? 0 : 10, marginBottom: 28}}>
      <Image style={styles.images} source={{uri: item.image}} />
      <View style={{marginBottom: 4, marginLeft: 4, marginTop: 14}}>
        <Text style={fontStyle.whiteRegular20Poppins}>{item.title}</Text>
      </View>
    </View>
  </TouchableOpacity>
);

export default function Home(props) {
  const navigation = useNavigation();
  const renderItem = props => <Item navigation={navigation} {...props} />;
  const renderRecomendedItem = props => (
    <RecomendedItem navigation={navigation} {...props} />
  );
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View style={{paddingVertical: 36}}>
            <Text style={fontStyle.whiteExtraLight25Montserrat}>Hello,</Text>
            <Text style={fontStyle.whiteMedium25Montserrat}>
              Vishal Chauhan 👋
            </Text>
          </View>
          <TouchableOpacity>
            <Ionicons
              style={{marginTop: 40}}
              name="notifications-outline"
              size={30}
              color={'#d9d9d9'}
            />
          </TouchableOpacity>
        </View>
        <View style={{alignItems: 'center'}}>
          <LinearGradient
            style={styles.share}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            colors={['#A1C4FD', '#FDA085']}>
            <View>
              <Text style={fontStyle.blackRegular20Poppins}>Share</Text>
              <Text style={fontStyle.blackRegular20Poppins}>with Friends</Text>
            </View>

            <TouchableOpacity
              style={{
                width: 120,
                height: 41,
                borderRadius: 30,
                backgroundColor: '#1B0808',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'row',
              }}>
              <Entypo
                style={{marginRight: 8}}
                name="share"
                size={25}
                color={'#d9d9d9'}
              />
              <Text style={fontStyle.whiteRegular20Poppins}>Share</Text>
            </TouchableOpacity>
          </LinearGradient>
        </View>
        <View
          style={{
            marginTop: 38,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: 14,
          }}>
          <Text style={fontStyle.whiteSemiBold25Poppins}>Recomended</Text>

          <TouchableOpacity>
            <Text
              style={[fontStyle.blueLight13Montserrat, {letterSpacing: 1.2}]}>
              VIEW ALL
            </Text>
          </TouchableOpacity>
        </View>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={HomeRecomendedList}
          renderItem={renderRecomendedItem}
          keyExtractor={item => item.key}
        />
        <View
          style={{
            marginTop: 38,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: 14,
          }}>
          <Text style={fontStyle.whiteSemiBold25Poppins}>
            Popular Categories
          </Text>

          <TouchableOpacity
            onPress={() => {
              navigation.navigate('CourseNavigator', {
                // navigating into diff screen of parent navigator
                screen: 'Courses',
                params: {data},
              });
            }}>
            <Text style={fontStyle.blueLight13Montserrat}>VIEW ALL</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={HomeList}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </View>
    </ScrollView>
  );
}

const HomeList = data;

// const HomeRecomendedList = [
//   {
//     key: '1',
//     text: 'Potrait Photography',
//     course: 'Jojo Mojo',
//     time: '6hrs',
//     ratings: '4.5',
//     uri: 'https://images.pexels.com/photos/4424567/pexels-photo-4424567.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
//   },
//   {
//     key: '2',
//     text: 'Introduction to Guitar',
//     course: 'Jojo Mojo',
//     uri: 'https://images.pexels.com/photos/1010518/pexels-photo-1010518.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
//   },

//   {
//     key: '3',
//     text: 'Public Speaking',
//     course: 'Jojo Mojo',
//     uri: 'https://images.pexels.com/photos/713149/pexels-photo-713149.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
//   },
//   {
//     key: '4',
//     text: 'Salads',
//     course: 'Jojo Mojo',
//     uri: 'https://images.pexels.com/photos/2284166/pexels-photo-2284166.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
//   },
//   {
//     key: '5',
//     text: 'Anatomy',
//     course: 'Jojo Mojo',
//     uri: 'https://images.pexels.com/photos/3059750/pexels-photo-3059750.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
//   },
// ];
const HomeRecomendedList = recomendedCourses;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#191414',
    color: 'white',
    paddingHorizontal: 32,
  },
  share: {
    width: 346,
    height: 127,
    backgroundColor: '#A1C4FD',
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  images: {
    width: 170,
    height: 150,
    borderRadius: 10,
  },
  Recomendedimages: {
    width: 316,
    height: 134,
    borderColor: '#fff',
    borderWidth: 0.3,
    borderRadius: 10,
  },
  title: {
    fontSize: 18,
    color: '#fff',
    marginBottom: 4,
    marginLeft: 4,
    marginTop: 8,
  },
  MentorName: {
    fontSize: 17,
    color: '#d9d9d9',
    marginLeft: 2,
    fontWeight: '100',
  },
});
