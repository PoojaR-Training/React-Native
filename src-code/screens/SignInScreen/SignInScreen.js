import React, {useEffect, useState} from 'react';
import {Image, Text, View, useWindowDimensions, StyleSheet, ScrollView} from 'react-native';
import Logo from '../../../assest/images/logo.png';
import CustomInput from '../../components/CustomInput/CustomeInput';
import {useNavigation} from '@react-navigation/native'
import CustomButton from '../../components/CustomButton/CustomButton';
import {useForm, Controller} from 'react-hook-form'

const SignInScreen = () => {
  const navigation = useNavigation();
  const {height} = useWindowDimensions();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const {control, handleSubmit} = useForm()
  
  const onSignInPress = () => {
   navigation.navigate('Home');
    console.warn('onSignInPress');
  };

  const onSignUpPress = () => {
    navigation.navigate('SignUp')
    console.warn('onSignUpPress');
  };
  const onSignInGooglePress = () => {
    console.warn('onSignInPressGoogle');
  };
  const onSignFacebookPress = () => {
    console.warn('onSignInPressFacebook');
  };
  const onForgetPasswordPress = () => {
    navigation.navigate('ForgetPassword')
    console.warn('onForgetPasswordPress');
  };
  return (
    <View>
      <ScrollView>
      <Image
        source={Logo}
        resizeMode="contain"
        style={[styles.logo, {height: height * 0.3}]}
      />
      <CustomInput
        placeholder="UserName"
        value={username}
        setValue={setUsername}
      />

      <CustomInput
        placeholder="Password"
        value={password}
        setValue={setPassword}
        secureTextEntry={true}
      />
      <CustomButton
        onPress={onSignInPress}
        txt="Sign In"
        types={`PRIMARY`}
      />
      <CustomButton
        onPress={onForgetPasswordPress}
        txt="Forget Password?"
        types={`TERTIARY`}
      />

      <CustomButton
        onPress={onSignInGooglePress}
        txt="Sign In With Google"
        bgcolor="#FAE9EA"
        fgcolor="#DD4D44"
      />

      <CustomButton
        onPress={onSignFacebookPress}
        txt="Sign In With Facebook"
        bgcolor="#E7EAF4"
        fgcolor="#4765A9"
      />

      <CustomButton
        onPress={handleSubmit(onSignUpPress)}
        types={'TERTIARY'}
        txt="Don't have a Account? SIGN UP"
      />
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  logo: {
    width: '70%',
    alignSelf: 'center',
  },
});

export default SignInScreen;
