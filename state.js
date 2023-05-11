import React,{useState} from 'react';
import {View, Text, StyleSheet,Button} from 'react-native';

const state = () => {
  const [name,setname]= useState("First Name",)
  let data = "abc";
  const updateName = () => {
    setname("Name Updated")
    data= "xyz"; //It will not be updated because its variable not state 
  };
  return (
    <View>
      <Text style={{fontSize : 30, marginTop : 50, marginLeft:10}}>States Example</Text>
      <Text style={{fontSize : 20, marginTop : 20, textAlign: "center"}}>{name}</Text>
      <Text style={{fontSize : 20, marginTop : 20, textAlign: "center"}}>{data}</Text>
      <Button title='Change Name' color={"green"} onPress={updateName}/> 
    </View>
    
  );
};


export default state;
