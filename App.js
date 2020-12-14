/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import StackNavigator from './src/StackNavigator';
import BottomStacknavigator from './src/BottomStackNavigator';
import AppContext from './src/reducer/AppContext';
const App = () => {
  return (
      <AppContext>
      <StackNavigator />
      </AppContext>
  );
  // <StackNavigator />
  // <BottomStacknavigator />;
};

const styles = StyleSheet.create({
  mainContaner: {
    flex: 1,
    borderWidth:1,
     borderColor:'red'
  },
});

export default App;
