import React from 'react';
import {View, Text, StyleSheet,Button} from 'react-native';
import exstyles from './exstyles'

const App = () => {
 
  return (
    <View>
      <Text style={{fontSize : 30, marginTop : 50, marginLeft:10, textAlign :"center", backgroundColor:"orange"}}>StyleSheet Example</Text>
      <Text style={styles.textBox}>StyleSheet</Text>
      <Text style={exstyles.textBox}>StyleSheet</Text>
    </View>
    
  );
  
};

const styles = StyleSheet.create({
  textBox :{
    fontSize: 30,
    marginTop : 50, 
    marginLeft:10,
    backgroundColor:"lightblue" ,
    color:"blue" ,
    borderRadius : 20,
    overflow: 'hidden',
    borderColor  :"red",
    textAlign : "center"
  }
});


export default App;