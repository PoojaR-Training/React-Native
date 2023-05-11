import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";

const App = () => {
  const [showIndicator, setShowIndicator] = useState(false);

  const dispplay = () => {
    setShowIndicator(true);

    setTimeout(() => {
      setShowIndicator(false);
    }, 2000);
  };
  return (
    <View style={styles.main}>
      <Text style={styles.txt}>Activity Loader</Text>
      <ActivityIndicator size="large" color="green" animating={showIndicator} />
      <Button title="Press me" onPress={() => dispplay()} />
    </View>
    
    
  );
};
const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  txt: {
    fontSize: 20,
    color: "orange",
    margin: 20,
  },
});

export default App;
