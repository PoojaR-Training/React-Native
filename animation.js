import React, {useRef, useState} from 'react';
import {Animated, View, Button, SafeAreaView, Pressable} from 'react-native';

const App = () => {
  var count = 0;
  
  const value = useState(new Animated.ValueXY({x: 0, y: 0}))[0];
  function move() {
    if (count % 2 == 0) {
      count++;
      Animated.timing(value, {
        toValue: {x:100, y: 100},
        duration: 1000,
        useNativeDriver: false,
      }).start();
    } else {
      count++;
      Animated.timing(value, {
        toValue: {x: 300, y:300},
        duration: 1000,
        useNativeDriver: false,
      }).start();
    }
  }
  return (
    <SafeAreaView >
      <Animated.View style={value.getLayout()}>
        <View
          style={{
            width: 100,
            height: 100,
            borderRadius: 100,
            backgroundColor: 'lightblue',
            margin:50
          }}
        />
          
      </Animated.View>
      <Button title="press" onPress={move} />
    </SafeAreaView>
  );
};

export default App;
