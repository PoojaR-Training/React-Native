import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack'

import SignInScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen/SignUpScreen';
import EmailConfirm from '../screens/EmailConfirmScreen/EmailConfirm';
import NewPasswordScreen from '../screens/NewPasswordScren/NewPasswordScreen';
import ForgetPasswordScreen from '../screens/ForgetPasswordScreen/ForgetPasswordScreen';
import HomeScreen from '../screens/HomeScreen';
const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
          headerShown: true
        }}>
          <Stack.Screen name="SignIn" component={SignInScreen}/>
          <Stack.Screen name="SignUp" component={SignUpScreen}/>
          <Stack.Screen name="EmailConfirm" component={EmailConfirm}/>
          <Stack.Screen name="NewPassword" component={NewPasswordScreen}/>
          <Stack.Screen name="ForgetPassword" component={ForgetPasswordScreen}/>
          <Stack.Screen name="Home" component={HomeScreen}/>
        </Stack.Navigator>
      </NavigationContainer>
  );
};
export default Navigation;
