import React, {useState} from 'react';
import {View, Text, StyleSheet,Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { Home} from './component/Home';
import { Login } from './component/Login';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={
        {
          headerStyle :{
            backgroundColor : 'pink',
          },
          headerTintColor : '#ff5a65',
        }
      }>
      <Stack.Screen name="Login Screen" component={Login} 
      options={{
        headerTitleStyle : {
          fontSize : 30
        }
      }}/>
        <Stack.Screen name="Home Screen" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  txt: {
    fontSize: 20,
    color: 'red',
    marginTop: 70,
    textAlign: 'center',
  },
  centerView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
