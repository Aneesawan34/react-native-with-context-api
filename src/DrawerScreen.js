import * as React from 'react';
import {Text, View} from 'react-native';
import TouchableOpacity from 'react-native-material-ripple';
import LinearGradient from 'react-native-linear-gradient';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import About from './screens/About';
import BottomStacknavigator from './BottomStackNavigator';
import Home from './screens/home';
import { useRoute } from '@react-navigation/native';
const menuItems = ['Home', 'About Us'];
const Drawer = createDrawerNavigator();

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <View>
        {menuItems.map((val, i) => (
          <TouchableOpacity
            onPress={() => {
              val === 'Home'
                ? props.navigation.navigate('Home')
                : val === 'About Us'
                ? props.navigation.navigate('About')
                : null;
            }}
            key={i}
            // style={{marginBottom: 7, borderWidth:1, borderColor:'green'}}
            >
            <Text style={{fontSize: 18, marginLeft: 30, marginBottom: 15 ,color:'red'}}>
              {val}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </DrawerContentScrollView>
  );
}

const DrawerScreen = () => {
  return (
    <Drawer.Navigator
      // initialRouteName="BottomTabs"
      drawerContent={(props) => CustomDrawerContent(props)}
      drawerStyle={{height: '100%', borderWidth:1, borderColor:'green'}}
      drawerPosition="left"
      drawerContentOptions={{
        activeTintColor: 'blue',
        inactiveTintColor: 'red',
        activeBackgroundColor: 'white',
        inactiveBackgroundColor: 'white',
        // itemStyle: {marginTop: -1},
        // labelStyle: {fontSize: 16, marginLeft: -10},
      }}>
      <Drawer.Screen
        name="BottomTab"
        component={BottomStacknavigator}
        // options={{
        //   title: 'Profile',
        //   drawerIcon: ({focused, size, color}) => (
        //     <MaterialIcons
        //       name={'Profile'}
        //       size={28}
        //       color={'black'}
        //       style={{marginLeft: 14}}
        //     />
        //   ),
        // }}
      />
      {/* <Drawer.Screen
        name="About"
        component={About}
        // options={{
        //   title: 'About',

        //   drawerIcon: ({focused, size, color}) => (
        //     <MaterialIcons
        //       name={'About'}
        //       size={28}
        //       color={'black'}
        //       style={{marginLeft: 14}}
        //     />
        //   ),
        // }}
      /> */}
      {/* <Drawer.Screen
        name="Home"
        component={Home}
        // options={{
        //   title: 'About',

        //   drawerIcon: ({focused, size, color}) => (
        //     <MaterialIcons
        //       name={'About'}
        //       size={28}
        //       color={'black'}
        //       style={{marginLeft: 14}}
        //     />
        //   ),
        // }}
      /> */}
    </Drawer.Navigator>
  );
};

export default DrawerScreen;
