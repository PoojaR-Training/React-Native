import React, {useEffect, useState} from 'react';
import {Text, View, StyleSheet} from 'react-native';

const HomeScreen = () => {
  return (
    <View>
      <Text style={style.txt}>Application start page</Text>
    </View>
  );
};
const style = StyleSheet.create(
  {
    txt:{
      fontSize: 30,
      fontWeight: 'bold',
      margin  : 20,
      textAlign: 'center'
    }
  }
)


export default HomeScreen;
