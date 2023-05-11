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
  const [selectRadioButton, setSelectRadioButton] = useState(1);
  return (
    <View style={styles.main}>
      <TouchableOpacity onPress={() => setSelectRadioButton(1)}>
        <View style={styles.radiowrap}>
          <View style={styles.radiobtn}>
            {selectRadioButton === 1 ? (
              <View style={styles.radiobg}></View>
            ) : null}
          </View>
          <Text style={styles.radiotxt}>Radio 1</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => setSelectRadioButton(2)}>
        <View style={styles.radiowrap}>
          <View style={styles.radiobtn}>
            {selectRadioButton === 2 ? (
              <View style={styles.radiobg}></View>
            ) : null}
          </View>
          <Text style={styles.radiotxt}>Radio 2</Text>
        </View>
      </TouchableOpacity>
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
