import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet,FlatList } from 'react-native';

const App = () => {
  const users =[
    {
      id: 1,
      name: 'John Doe',
    },
    {
      id: 2,
      name: 'Jane Doe',
    },
    {
      id: 3,
      name: 'Jane Doe',
    }
  ]
  return (
 <View style={styles.container}>
  <Text style={styles.title}>Flatlist example</Text>
  <FlatList data={users} renderItem={({item})=><Text style={styles.text}>{item.name}</Text>} />
 </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fae8ea',
    padding: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
    color:'#ff5a65',
  },
  text: {
    fontSize:15,
    height: 60,
    borderColor: '#ff5a65',
    borderWidth: 1,
    borderRadius: 15,
    width: '100%',
    marginBottom: 20,
    textAlign: 'justify',
    padding:15,
  },
});


export default App;
