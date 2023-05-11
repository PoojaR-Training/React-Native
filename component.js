import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default class Component extends React.Component {
  render() {
    return (
      <View>
        <Text style={styles.text}>Component {this.props.name}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    height: 50,
    borderColor: "#ff5a65",
    borderWidth: 1,
    width: "100%",
    margin: 10,
    textAlign: "center",
    backgroundColor: "orange",
  },
});
