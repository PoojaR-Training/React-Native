import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import TextBox from 'react-native-password-eye'; 
const App = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const[password, setPassword] = useState('');
  const [display, setDisplay] = useState(false);
  const resetData = () => {
    setName('');
    setEmail('');
    setUsername('');
    setPassword('');
    setDisplay(false);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Basic Form</Text>
      <TextInput
        style={styles.input}
        placeholder="Name"
        onChangeText={setName}
        value={name}
      />
          
    
       <TextInput
        style={styles.input}
        placeholder="UserName"
        onChangeText={setUsername}
        value={username}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={setEmail}
        value={email}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        onChangeText={setPassword}
        secureTextEntry={true}
        value={password}
      />
       
      <TouchableOpacity style={styles.button} onPress={()=>{setDisplay(true)}}>
        <Text style={styles.buttonText}>Submit </Text>
      </TouchableOpacity>
     
      <TouchableOpacity style={styles.button} onPress={resetData}>
        <Text style={styles.buttonText}>Reset</Text>
      </TouchableOpacity>


      <View>
        {
      display ?
      <View>
          <Text style={styles.txtDisplay}>Name : {name}</Text>
          <Text style={styles.txtDisplay}>UserName : {username}</Text>
          <Text style={styles.txtDisplay}>Email : {email}</Text>
      </View>
      :null
      }
      </View>
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fae8ea',
    padding: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
    color:'#ff5a65',
  },
  input: {
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
  button: {
    backgroundColor: '#ff5a65',
    borderRadius:20,
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
    width :'50%',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize:18,
    textAlign: 'center',
  },
  txtDisplay:{
    marginTop:10,
    textAlign :'left',
    fontWeight: 'bold',
    fontSize:20,
  }
});

export default App;
