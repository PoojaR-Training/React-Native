import React from 'react';
import {View, Text, StyleSheet, Button, TextInput} from 'react-native';
import Component from './component';
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      name: 'Pooja',
    };
  }
  updateName(name) {
    this.setState({name : name});
  }
  render() {
    return (
      <View>
        <Text style={styles.title}>{this.state.name}</Text>
        <TextInput placeholder= 'Enter Name' onChangeText={(txt)=>this.updateName(txt)} />
        <Button title="Press me"></Button>
        <Component name={this.state.name} />
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
    shadowOpacity: 1,
    shadowColor: 'yellow',
    backgroundColor: 'orange',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
    marginLeft: 40,
    textAlign: 'center',
  },
});

export default App;
