import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Lessons from '../Screens/Courses/Lessons';
import Description from '../Screens/Courses/Description';
import {NavigationContainer} from '@react-navigation/native';

const Tab = createMaterialTopTabNavigator();

function Course_View_Navigator(props) {
  return (
    <NavigationContainer independent={true}>
      <Tab.Navigator tabBar={props => <MyTabBar {...props} />}>
        <Tab.Screen name="Lessons" component={Lessons} />
        <Tab.Screen name="Description" component={Description} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

function MyTabBar({state, descriptors, navigation, position}) {
  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          alignItems: 'center',
          width: 340,
          height: 58,
          marginTop: 40,
          borderRadius: 30,
          backgroundColor: 'grey',
        }}>
        {state.routes.map((route, index) => {
          const {options} = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;

          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };
          // modify inputRange for custom behavior
          const inputRange = state.routes.map((_, i) => i);

          return (
            <TouchableOpacity
              accessibilityRole="button"
              accessibilityState={isFocused ? {selected: true} : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              // style={{ paddingHorizontal: 6 }}
            >
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: 150,
                  height: 40,
                  borderRadius: 30,
                  backgroundColor: isFocused ? '#4285F4' : 'transparent',
                }}>
                <View
                  style={{
                    position: 'relative',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Text
                    style={{
                      color: isFocused ? '#fff' : '#000',
                      fontWeight: isFocused ? '700' : '500',
                    }}>
                    {label}
                  </Text>
                  {label === 'Lessons' && (
                    <View
                      style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        position: 'absolute',
                        width: 18,
                        height: 18,
                        borderRadius: 18,
                        backgroundColor: '#000',
                        top: -5,
                        right: -20,
                      }}>
                      <Text
                        style={{
                          color: '#fff',
                          fontSize: 10,
                          textAlign: 'center',
                        }}>
                        10
                      </Text>
                    </View>
                  )}
                </View>
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default Course_View_Navigator;