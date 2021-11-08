function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      activeColor="#4ea3ad"
      barStyle={{backgroundColor: 'black'}}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
            // <HomeIcon />
          ),
        }}
      />
      <Tab.Screen
        name="Courses"
        component={Courses}
        options={{
          tabBarLabel: 'Courses',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="book-open" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Profile',
          // tabBarIcon: ({color}) => (
          //   <MaterialCommunityIcons name="account" color={color} size={26} />
          // ),
        }}
      />
    </Tab.Navigator>
  );
}
