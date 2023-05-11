import React, {useState} from 'react';
import {StyleSheet, Text, View, Button, ScrollView,FlatList} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
const App = () => {
  const [data, setdata] = useState('');

  const getApiData = async () => {
    let result = await fetch('https://dummyjson.com/products/1');
    const data = await result.json();
    return data;
  };
  const get = async () => {
    try {
      const data = await AsyncStorage.getItem('key');
      if (data !== null) {
        setdata(data);
      }
    } catch (e) {
      console.error(e);
    }
  };

  const add = async () => {
    const data = await getApiData();
    try {
      await AsyncStorage.setItem('key', JSON.stringify(data));
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.button}>
        <Button title={'add'} onPress={add} />
      </View>
      
      <View style={styles.button}>
        <Button title={'get'} onPress={get} />
      </View>
      <ScrollView>
        <FlatList
        data={data}
        renderItem={({ item }) => (
            <Text>{data}</Text>
        )}
      />
        </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    marginBottom: 30,
  },
  button: {
    margin: 5,
    width: 250,
  },
});
export default App;
