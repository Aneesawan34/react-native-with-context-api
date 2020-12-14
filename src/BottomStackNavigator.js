import React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Home from './screens/home';
import About from './screens/About';

const Tab = createBottomTabNavigator();

function BottomStacknavigator() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          return route.name === 'Home' ? 
          <FontAwesome
          name="home"
          size={size}
          color={color}
        />
            :
            <FontAwesome
            name="info"
            size={size}
            color={color}
          />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
        labelStyle: {
            // borderWidth: 1,
          fontSize: 14,
          //   bottom: 3,
        },
        // labelPosition: below-icon,
          // beside-icon' | 'below-icon
        tabStyle: {
          backgroundColor:'green',
            // borderWidth: 1,
            height: '100%',
        },
        style: {
            borderWidth: 0,
            // borderColor: 'red',
            // height: 50,
          // backgroundColor: 'blue',
        },
      }}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="About" component={About} />
    </Tab.Navigator>
  );
}

export default BottomStacknavigator;
