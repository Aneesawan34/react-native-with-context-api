import React, { useContext } from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import GlobalHeader from '../component/GlobalHeader';
import { PageContext } from '../reducer/AppContext';
import { PageContextKeys } from '../reducer/keys';

function Home(props) {
  const { state, dispatch } = useContext(PageContext);
  console.log("State in home: ", state);
  return (
    <View style={{flex: 1}}>
                  <GlobalHeader 
      OneHeadingEnable = {true} 
      HeadingText = "Home" 
      fontColor = "red" 
      backgroundColor="green"
      leftMenu = {true}
      navigation = {props.navigation}
      />
    <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
      <Text style={{fontSize: 16}}>Home Screen</Text>
      <Text>Name:  {state.userName}</Text>
      <Text>Key: {state.otpKey}</Text>
      <View style={{
        width:'60%',
        flexDirection:'row',
        justifyContent:'space-between'
      }}>
      <TouchableOpacity 
      style={{borderWidth: 1, borderColor: 'red', padding:10, borderRadius:10, marginTop:10}}
      onPress={()=>dispatch({type:PageContextKeys.userName, payload:'Arhum'})}
      >
      <Text>Name Change</Text>
      </TouchableOpacity>
      <TouchableOpacity 
      style={{borderWidth: 1, borderColor: 'red', padding:10, borderRadius:10, marginTop:10}}
      onPress={()=>dispatch({type:PageContextKeys.otpKey, payload:'67890'})}
      >
      <Text>Key Change</Text>
      </TouchableOpacity>
        </View>
    </View>
</View>
  );
}

export default Home;
