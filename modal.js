import React, {useState} from 'react';
import {View, Text, StyleSheet, Button, Modal} from 'react-native';

const App = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const close= () => {
    setModalVisible(!modalVisible);
  };
  return (
    <View style={styles.main}>
      <Text style={styles.txt}>Model show </Text>
      <Modal transparent={true} visible= {modalVisible}>
        <View style={styles.centerView}>
          <View style={styles.modalView}>
            <Text style={styles.txt}>Modal Text</Text>
            <Button title="Close" onPress={()=>close()} />
          </View>
        </View>
      </Modal>
      <Button title="Open" onPress={()=>close()}/>
    </View>
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
  centerView :{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView :{
    backgroundColor : 'orange',
    padding: 10,
    margin : 10,
    width :"70%",
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
