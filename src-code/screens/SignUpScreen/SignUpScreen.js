import React, {useEffect, useState} from 'react';
import {Image, Text, View, useWindowDimensions, StyleSheet, ScrollView} from 'react-native';
import Logo from '../../../assest/images/logo.png';
import CustomInput from '../../components/CustomInput/CustomeInput';
import SocialSignIn from '../../components/SocialSignInButton/SocialSignIn';

const SignUpScreen = () => {
  const {height} = useWindowDimensions();
  

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [passwordRepet, setPasswordRepet] = useState('');
  return (
    <View>
      <ScrollView>
      <Text style={styles.txt}>Create an Account</Text>
      <CustomInput
        placeholder="UserName"
        value={username}
        setValue={setUsername}
      />
      <CustomInput placeholder="Email" value={email} setValue={setEmail} />

      <CustomInput
        placeholder="Password"
        value={password}
        setValue={setPassword}
        secureTextEntry={true}
      />
      <CustomInput
        placeholder="Password Repeat"
        value={passwordRepet}
        setValue={setPasswordRepet}
        secureTextEntry={true}
      />
      <Text style={styles.text}>
        By reggistering, Do you accept our{' '}
        <Text style={styles.link}>Terms of use</Text> and{' '}
        <Text style={styles.link}>Privacy Policy</Text>
      </Text>
      <SocialSignIn />
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

export default SignUpScreen;
