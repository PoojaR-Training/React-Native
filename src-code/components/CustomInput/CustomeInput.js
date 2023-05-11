import React from 'react';
import {Image, Text, View, StyleSheet, TextInput} from 'react-native';

const CustomInput = ({value,setValue,placeholder,secureTextEntry}) => {

  return (
    <View style={styles.container}>
    <TextInput 
    placeholder={placeholder}
    value={value}
    onChangeText={setValue}
    secureTextEntry ={secureTextEntry}
    style={styles.input} />
    </View>
  );
};
const styles = StyleSheet.create({
 container :{
    width : '90%',
    height : 50,
    justifyContent : 'center',
    marginLeft : 10,
    marginVertical : 10,
    paddingHorizontal:10,
    backgroundColor : 'white',
    borderBottomColor : 'black',
    borderWidth  :1,
    borderRadius : 5
 },
 input : {}
});

export default CustomInput;
