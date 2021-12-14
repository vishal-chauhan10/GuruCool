import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  SectionList,
  FlatList,
  TextInput,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
// import {TextInput} from 'react-native-paper';
import {RadioButton} from 'react-native-paper';
import Category from './../Components/Category';
import EBooks from '../Components/EBooks';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Radio_Btn from './../Questions/Radio_Btn';
import Search from './../Svg_Components/Search.svg';

// const ListItem = ({item}) => {
//   return (
//     <View style={styles.item}>
//       <Image
//         source={{
//           uri: item.uri,
//         }}
//         style={styles.itemPhoto}
//         resizeMode="cover"
//       />
//       <Text style={styles.itemText}>{item.text}</Text>
//     </View>
//   );
// };

export default function Home(props) {
  return (
    <View style={styles.container}>
      <View style={{paddingVertical: 36, paddingHorizontal: 24}}>
        <Text style={{fontWeight: '200', fontSize: 25}}>Hello,</Text>
        <Text style={{fontWeight: '500', fontSize: 25}}>Vishal Chauhan 👋</Text>
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
        {/* </View> */}
      </View>
    </View>
  );
}

const SECTIONS = [
  {
    title: 'Daily Updates',
    data: [
      {
        key: '1',
        text: 'AI is the new beginning',
        uri: 'https://picsum.photos/id/1/200',
      },
      {
        key: '2',
        text: 'HTML & CSS',
        uri: 'https://picsum.photos/id/10/200',
      },

      {
        key: '3',
        text: 'UI & UX',
        uri: 'https://picsum.photos/id/1002/200',
      },
      {
        key: '4',
        text: 'Item text 4',
        uri: 'https://picsum.photos/id/1006/200',
      },
      {
        key: '5',
        text: 'Item text 5',
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
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  // title: {
  //   flexDirection: 'row',
  //   margin: 20,
  //   // borderColor: 'black',
  //   // borderWidth: 1,
  // },
  // textinput: {
  //   color: '#000',
  //   backgroundColor: '#f5f5f5',
  //   placeholder: 'Search',
  //   borderColor: '#000',
  //   borderRadius: 10,
  //   width: '80%',
  // },
  // search: {
  //   paddingHorizontal: 15,
  //   justifyContent: 'space-between',
  //   alignItems: 'center',
  //   flexDirection: 'row',
  // },
  // dUpdates: {
  //   margin: 14,
  // },

  // sectionHeader: {
  //   fontWeight: '800',
  //   fontSize: 22,
  //   color: '#EEE',
  //   marginTop: 20,
  //   marginBottom: 5,
  // },
  // item: {
  //   margin: 10,
  // },
  // itemPhoto: {
  //   borderRadius: 5,
  //   width: 200,
  //   height: 200,
  // },
  // itemText: {
  //   color: '#EEE',
  //   marginTop: 5,
  //   fontWeight: '500',
  //   fontSize: 18,
  // },
});

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
