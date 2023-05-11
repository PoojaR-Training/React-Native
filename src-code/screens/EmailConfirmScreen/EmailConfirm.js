import React, {useEffect, useState} from 'react';
import {Text, View, StyleSheet, ScrollView} from 'react-native';
import CustomInput from '../../components/CustomInput/CustomeInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import {useNavigation} from '@react-navigation/native';

const EmailConfirm = () => {
  const navigation = useNavigation();
  const [code, setCode] = useState('');
  const onResendCodePress = () => {
    console.warn('Resend code');
  };
  const onSignInPress = () => {
    navigation.navigate('SignIn');
  };
  return (
    <View>
      <ScrollView>
        <Text style={styles.txt}>Confirm Email</Text>
        <CustomInput
          placeholder="Enter Secure Code"
          value={code}
          setValue={setCode}
        />
        <CustomButton
          onPress={onResendCodePress}
          txt="Resend Code"
          types={`SECONDARY`}
        />
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
export default EmailConfirm;
