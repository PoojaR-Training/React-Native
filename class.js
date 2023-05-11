import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import Component  from './component';

class App extends React.Component {
  render() {
    return (
      <View>
        <Text style={styles.title}>Hello World!</Text>
        <Button title='Press me'></Button>
      <Component/>
      </View>
    );
  }
}
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

    backgroundColor:'orange',
    justifyContent : 'center',
    alignItems : 'center',
    marginTop : 50,
    marginLeft : 40,
    textAlign : 'center',
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
