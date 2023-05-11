import React, {useEffect, useState} from 'react';
import {Text, View,StyleSheet,ScrollView} from 'react-native';
import CustomInput from '../../components/CustomInput/CustomeInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import {useNavigation} from '@react-navigation/native';
const NewPasswordScreen = () => {
  const navigation = useNavigation();
  const [code, setCode] = useState('');
  const [password, setPassword] = useState('');
  const onSendPress = () => {
    navigation.navigate('EmailConfirm');
    console.warn('send press');
  };
  const onSignInPress = () => {
    navigation.navigate('SignIn');
  };
  return (
    <View>
      <ScrollView>
        <Text style={styles.txt}>Reset Your Password</Text>
        <CustomInput
          placeholder="Enter Confirnation Code"
         value={code}
          setValue={setCode}
        />
        <CustomInput
          placeholder="Enter New Password"
          value={password}
          setValue={setPassword}
        />
        <CustomButton onPress={onSendPress} txt="Submit" types={`SECONDARY`} />
        <CustomButton
          onPress={onSignInPress}
          txt="Back to Sign In "
          types={`TERTIARY`}
        />
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  txt: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 20,
    color: '#042675',
  },
  text: {
    color: 'gray',
    marginVertical: 10,
    marginLeft: 10,
  },
  link: {
    color: '#FDB075',
    textDecorationLine: 'underline',
  },
});
export default NewPasswordScreen;
