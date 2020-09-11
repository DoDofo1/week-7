import React from 'react';
import {View,Text} from 'react-native';
function App(){
  return(
    <View style={{
      flexDirection:"row",
      hright:100,
      padding:20
    }}>

    <View style={{backgroundColor:"blue",flex:0.3}}></View>
    <View style={{backgroundColor:"red",flex:0.5}}></View>
    <Text>I Love cat</Text>
    </View>
  )
}
export default App;