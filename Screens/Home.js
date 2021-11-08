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
} from 'react-native';
// import {TextInput} from 'react-native-paper';
import {RadioButton} from 'react-native-paper';
import Category from './../Components/Category';
import EBooks from '../Components/EBooks';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Radio_Btn from './../Questions/Radio_Btn';
import Search from './../Svg_Components/Search.svg';

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
    </View>
  );
};

export default function Home(props) {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.title}>
          <Text style={{color: '#45abb1', fontWeight: 'bold', fontSize: 25}}>
            Learnify
          </Text>
        </View>

        <View style={styles.search}>
          <View>{/* <Search size={30} color={'black'} /> */}</View>
          <View style={styles.textinput}>
            <TextInput placeholder="Search" style={{color: '#000'}} />
          </View>
          <View>
            <FontAwesome5 name={'sliders-h'} light size={30} color={'black'} />
          </View>
        </View>
        <View style={styles.dUpdates}>
          <Text
            style={{
              color: '#000',
              fontWeight: '500',
              marginLeft: 15,
              fontSize: 25,
            }}>
            Daily Updates
          </Text>

          <SectionList
            contentContainerStyle={{paddingHorizontal: 2}}
            horizontal
            stickySectionHeadersEnabled={false}
            sections={SECTIONS}
            renderSectionHeader={({section}) => (
              <>
                {/* <Text style={styles.sectionHeader}>{section.title}</Text> */}
                <FlatList
                  horizontal
                  data={section.data}
                  // renderItem={({item}) => <ListItem item={item} />}
                  showsHorizontalScrollIndicator={false}
                />
              </>
            )}
            renderItem={({item, section}) => {
              return <ListItem item={item} />;
            }}
          />
        </View>
        <View style={styles.category}>
          <Text
            style={{
              color: '#141414',
              fontWeight: 'bold',
              fontSize: 25,
              marginTop: 18,
              marginLeft: 15,
            }}>
            Category
          </Text>
          {/* <TouchableOpacity> */}
          <View
            style={{
              marginHorizontal: 15,
              flexDirection: 'row',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
            }}>
            <Category text="Technology" />
            <Category text="Literature" />
            <Category text="Chemistry" />
            <Category text="Physics" />
            <Category text="Accounts" />
            <Category text="Biology" />
          </View>
          {/* </TouchableOpacity> */}
        </View>
        {/* 
        <View style={styles.ebook}>
          <Text
            style={{
              color: '#141414',
              fontWeight: 'bold',
              fontSize: 25,
              marginTop: 18,
              marginLeft: 15,
            }}>
            
          </Text>
          <EBooks src={'https://reactjs.org/logo-og.png'} />
        </View> */}

        <Radio_Btn qstn="Are you new to coding?" />
      </View>
    </ScrollView>
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
    backgroundColor: 'white',
  },
  title: {
    flexDirection: 'row',
    margin: 20,
    // borderColor: 'black',
    // borderWidth: 1,
  },
  textinput: {
    color: '#000',
    backgroundColor: '#f5f5f5',
    placeholder: 'Search',
    borderColor: '#000',
    borderRadius: 10,
    width: '80%',
  },
  search: {
    paddingHorizontal: 15,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  dUpdates: {
    margin: 14,
  },

  sectionHeader: {
    fontWeight: '800',
    fontSize: 22,
    color: '#000',
    marginTop: 20,
    marginBottom: 5,
  },
  item: {
    margin: 10,
  },
  itemPhoto: {
    borderRadius: 5,
    width: 200,
    height: 200,
  },
  itemText: {
    color: '#000',
    marginTop: 5,
    fontWeight: '500',
    fontSize: 18,
  },
});
