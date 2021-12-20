import React from 'react';
import {
  View,
  StyleSheet,
  SectionList,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
// import {TextInput} from 'react-native-paper';
import AntDesign from 'react-native-vector-icons/AntDesign';

const ListItem = ({item}) => {
  return (
    <View style={styles.item}>
      <Image
        source={{
          uri: item.uri,
        }}
        style={styles.itemPhoto}
        resizeMode="cover"
      />
      <Text style={styles.itemText}>{item.text}</Text>
      <Text style={styles.itemCourse}>{item.course}</Text>
    </View>
  );
};

const Recomended = ({item}) => {
  return (
    <View style={styles.item}>
      <Image
        source={{
          uri: item.uri,
        }}
        style={styles.itemRecomendedPhoto}
        resizeMode="cover"
      />
      <Text style={styles.itemText}>{item.text}</Text>
      <Text style={styles.itemCourse}>{item.course}</Text>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <View
          style={{flexDirection: 'row', marginHorizontal: 10, marginTop: 5}}>
          <MaterialIcons
            name="access-time"
            size={20}
            color={'#fff'}
            // opacity={0.4}
          />
          <Text style={{fontSize: 18, color: '#fff'}}>{item.time}</Text>
        </View>

        <View
          style={{flexDirection: 'row', marginHorizontal: 10, marginTop: 5}}>
          <AntDesign
            name="staro"
            size={20}
            color={'#fff'}
            // opacity={0.4}
          />
          <Text style={{fontSize: 18, color: '#fff'}}>{item.ratings}</Text>
        </View>
      </View>
    </View>
  );
};

export default function Home(props) {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={{paddingVertical: 36}}>
          <Text style={{fontWeight: '200', fontSize: 25}}>Hello,</Text>
          <Text style={{fontWeight: '500', fontSize: 25}}>
            Vishal Chauhan 👋
          </Text>
        </View>
        <View style={{alignItems: 'center'}}>
          {/* <View style={styles.share}> */}
          <LinearGradient
            style={styles.share}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            colors={['#A1C4FD', '#FDA085']}>
            <Text
              style={{
                fontSize: 22,
                color: '#000',
                fontWeight: '500',
                paddingTop: 15,
                paddingRight: 15,
              }}>
              Share with Friends
            </Text>

            <TouchableOpacity
              style={{
                width: 149,
                height: 61,
                borderRadius: 30,
                backgroundColor: '#1B0808',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={{fontSize: 20}}>Share</Text>
            </TouchableOpacity>
          </LinearGradient>
        </View>

        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text
            style={{
              fontSize: 27,
              color: '#fff',
              marginTop: 38,
              marginBottom: 10,
            }}>
            Recomended
          </Text>
          <TouchableOpacity>
            <Text style={{fontSize: 18, color: '#4285F4', marginTop: 38}}>
              View all
            </Text>
          </TouchableOpacity>
        </View>
        <View>
          <SectionList
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{paddingHorizontal: 10}}
            stickySectionHeadersEnabled={false}
            sections={COURSES}
            renderItem={({item, section}) => {
              return <Recomended item={item} />;
            }}
          />
        </View>

        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text
            style={{
              fontSize: 27,
              color: '#fff',
              marginTop: 38,
              marginBottom: 10,
            }}>
            Categories
          </Text>
          <TouchableOpacity>
            <Text style={{fontSize: 18, color: '#4285F4', marginTop: 38}}>
              View all
            </Text>
          </TouchableOpacity>
        </View>

        <SectionList
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{paddingHorizontal: 10}}
          stickySectionHeadersEnabled={false}
          sections={SECTIONS}
          renderItem={({item, section}) => {
            return <ListItem item={item} />;
          }}
        />
      </View>
    </ScrollView>
  );
}

const COURSES = [
  {
    data: [
      {
        key: '1',
        text: 'Potrait Photography',
        course: 'Mentor: Jojo Mojo',
        time: '6hrs',
        ratings: '4.5',
        uri: 'https://picsum.photos/id/1/200',
      },
      {
        key: '2',
        text: 'Coding',
        course: '36 Course',
        uri: 'https://picsum.photos/id/10/200',
      },

      {
        key: '3',
        text: 'UI & UX',
        course: '36 Course',
        uri: 'https://picsum.photos/id/1002/200',
      },
      {
        key: '4',
        text: 'Accounts',
        course: '36 Course',
        uri: 'https://picsum.photos/id/1006/200',
      },
      {
        key: '5',
        text: 'Physics',
        course: '36 Course',
        uri: 'https://picsum.photos/id/1008/200',
      },
    ],
  },
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#191414',
    color: 'white',
    paddingHorizontal: 32,
  },
  share: {
    width: 376,
    height: 127,
    paddingTop: 31,
    // paddingLeft: 24,
    backgroundColor: '#A1C4FD',
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  itemRecomendedPhoto: {
    borderRadius: 5,
    width: 316,
    height: 134,
  },

  sectionHeader: {
    fontWeight: '800',
    fontSize: 22,
    color: '#EEE',
    marginTop: 20,
    marginBottom: 5,
  },
  item: {
    marginLeft: 10,
  },
  itemPhoto: {
    borderRadius: 5,
    width: 170,
    height: 150,
  },
  itemText: {
    color: '#EEE',
    marginTop: 5,
    fontWeight: '500',
    fontSize: 18,
  },
  itemCourse: {
    color: '#EEE',
    marginTop: 5,
    fontWeight: '500',
    fontSize: 14,
    opacity: 0.7,
  },
});

const SECTIONS = [
  {
    data: [
      {
        key: '1',
        text: 'Photography',
        course: '36 Course',
        uri: 'https://picsum.photos/id/1/200',
      },
      {
        key: '2',
        text: 'Coding',
        course: '36 Course',
        uri: 'https://picsum.photos/id/10/200',
      },

      {
        key: '3',
        text: 'UI & UX',
        course: '36 Course',
        uri: 'https://picsum.photos/id/1002/200',
      },
      {
        key: '4',
        text: 'Accounts',
        course: '36 Course',
        uri: 'https://picsum.photos/id/1006/200',
      },
      {
        key: '5',
        text: 'Physics',
        course: '36 Course',
        uri: 'https://picsum.photos/id/1008/200',
      },
    ],
  },
];

// <View style={styles.title}>
//           <Text style={{color: '#45abb1', fontWeight: 'bold', fontSize: 25}}>
//             GuruCool
//           </Text>
//         </View>

//         <View style={styles.search}>
//           <View>{/* <Search size={30} color={'black'} /> */}</View>
//           <View style={styles.textinput}>
//             <TextInput placeholder="Search" style={{color: '#000'}} />
//           </View>
//           <View>
//             <FontAwesome5 name={'sliders-h'} light size={30} color={'black'} />
//           </View>
//         </View>
//         <View style={styles.dUpdates}>
//           <Text
//             style={{
//               color: '#000',
//               fontWeight: '500',
//               marginLeft: 15,
//               fontSize: 25,
//             }}>
//             Daily Updates
//           </Text>

//           <SectionList
//             contentContainerStyle={{paddingHorizontal: 2}}
//             horizontal
//             stickySectionHeadersEnabled={false}
//             sections={SECTIONS}
//             renderSectionHeader={({section}) => (
//               <>
//                 {/* <Text style={styles.sectionHeader}>{section.title}</Text> */}
//                 <FlatList
//                   horizontal
//                   data={section.data}
//                   // renderItem={({item}) => <ListItem item={item} />}
//                   showsHorizontalScrollIndicator={false}
//                 />
//               </>
//             )}
//             renderItem={({item, section}) => {
//               return <ListItem item={item} />;
//             }}
//           />
//         </View>
//         <View style={styles.category}>
//           <Text
//             style={{
//               color: '#141414',
//               fontWeight: 'bold',
//               fontSize: 25,
//               marginTop: 18,
//               marginLeft: 15,
//             }}>
//             Category
//           </Text>
//           {/* <TouchableOpacity> */}
//           <View
//             style={{
//               marginHorizontal: 15,
//               flexDirection: 'row',
//               flexWrap: 'wrap',
//               justifyContent: 'space-between',
//             }}>
//             <Category text="Technology" />
//             <Category text="Literature" />
//             <Category text="Chemistry" />
//             <Category text="Physics" />
//             <Category text="Accounts" />
//             <Category text="Biology" />
//           </View>
//           {/* </TouchableOpacity> */}
//         </View>
//         {/*
//         <View style={styles.ebook}>
//           <Text
//             style={{
//               color: '#141414',
//               fontWeight: 'bold',
//               fontSize: 25,
//               marginTop: 18,
//               marginLeft: 15,
//             }}>

//           </Text>
//           <EBooks src={'https://reactjs.org/logo-og.png'} />
//         </View> */}

//         <Radio_Btn qstn="Are you new to coding?" />
