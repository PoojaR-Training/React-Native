import React, { useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

const Tab = createMaterialTopTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Screen1" component={Screen1} />
        <Tab.Screen name="Screen2" component={Screen2} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
const Screen2 = () => {
  return (
    <View style={styles.centerView}>
      <Text style={styles.txt}>Home Screen</Text>
    </View>
  );
};
const Screen1 = () => {
  return (
    <View style={styles.centerView}>
      <Text style={styles.txt}>Login Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  txt: {
    fontSize: 20,
    color: "red",
    marginTop: 70,
    textAlign: "center",
  },
  centerView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default App;
