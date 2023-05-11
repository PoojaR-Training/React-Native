import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Grid View</Text>
      <View style={{flex: 1, flexDirection: 'row', flexWrap: 'wrap'}}>
        <Text style={styles.text}>Pooja</Text>
        <Text style={styles.text}>Pooja</Text>
        <Text style={styles.text}>Pooja</Text>
        <Text style={styles.text}>Pooja</Text>
        <Text style={styles.text}>Pooja</Text>
        <Text style={styles.text}>Pooja</Text>
      </View>
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
    margin: 20,
    color: '#ff5a65',
  },
  text: {
    fontSize: 15,
    height: 50,
    borderColor: '#ff5a65',
    borderWidth: 1,
    width: 60,
    marginBottom: 10,
    marginLeft: 10,
    textAlign: 'center',
  },
});

export default App;
