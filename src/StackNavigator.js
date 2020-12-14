import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './screens/home';
import DrawerScreen from './DrawerScreen';
import BottomStacknavigator from './BottomStackNavigator';

const Stack = createStackNavigator();

function StackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none" initialRouteName="Drawer">
        {/* <Stack.Screen name="Home" component={Home} /> */}
        {/* <Stack.Screen name="BottomTab" component={BottomStacknavigator} /> */}
        <Stack.Screen name="Drawer" component={DrawerScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default StackNavigator;
