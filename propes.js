import React,{useState} from 'react';
import {View, Text, StyleSheet,Button} from 'react-native';

const App = () => {
 const [name,setname] = useState("Xyz")//state 
 const updateName = () => {
  setname("Name Updated")
};

  return (
    <View>
      <Text style={{fontSize : 30, marginTop : 50, marginLeft:10}}>Propes Example</Text>
      <Text style={{fontSize : 20, marginTop : 20, textAlign: "center", backgroundColor :"orange"}}>Parent Component</Text>
      <User name={name} age={22}/> 
      <Button title='Change Name' color={"green"} onPress={updateName}/> 
    </View>
    
  );
};
const User =(propes)=>{
  //Propes
  return(
    <View>
        <Text style={{fontSize : 20, marginTop : 20, textAlign: "center", backgroundColor:"yellow"}}>{propes.name}</Text>
    </View> 
  )
}
