import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  TextInput,
  TouchableOpacity,
} from "react-native";

const App = () => {
  const skills = [
    {
      id: 1,
      name: "HTML",
    },
    {
      id: 2,
      name: "CSS",
    },
    {
      id: 3,
      name: "Java",
    },
    {
      id: 4,
      name: "React",
    },
    {
      id: 5,
      name: "Redux",
    },
  ];
  const [selectRadioButton, setSelectRadioButton] = useState(1);
  return (
    <View style={styles.main}>
      {skills.map((item, index) => (
        <TouchableOpacity onPress={() => setSelectRadioButton(item.id)}>
          <View style={styles.radiowrap}>
            <View style={styles.radiobtn}>
              {selectRadioButton === item.id ? (
                <View style={styles.radiobg}></View>
              ) : null}
            </View>
            <Text style={styles.radiotxt}>{item.name}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};
const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  radiotxt: {
    fontSize: 30,
    margin: 10,
  },
  radiobtn: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "black",
    margin: 10,
  },
  radiowrap: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  radiobg: {
    backgroundColor: "black",
    width: 22,
    height: 22,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "black",
    margin: 8,
  },
});

export default App;
