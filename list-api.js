import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Button, ScrollView } from "react-native";

const App = () => {
  const [data, setData] = useState([]);
  const getApiData = async () => {
    let result = await fetch("https://jsonplaceholder.typicode.com/posts");
    result = await result.json();
    setData(result);
  };

  useEffect(() => {
    getApiData();
  }, []);
  return (
    <ScrollView>
      <Text style={styles.txt}>List Api Call</Text>
      {data.map((item) => (
        <View style={styles.txtview}>
          <Text style={{ fontSize: 20, color: "red" }}>{item.id}</Text>
          <Text>{item.title}</Text>
          <Text>{item.body}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  txt: {
    fontSize: 30,
    color: "blue",
    marginTop: 50,
    textAlign: "center",
  },
  txtview: {
    backgroundColor: "#fff",
    padding: 10,
    margin: 20,
    borderRadius: 10,
    shadowColor: "#000",
    borderColor: "#000",
    borderWidth: 1,
    width: "80%",
    height: 170,
  },
});

export default App;
