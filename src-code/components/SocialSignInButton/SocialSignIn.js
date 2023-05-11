import React, {useEffect, useState} from 'react';
import {Image, Text, View, useWindowDimensions, StyleSheet} from 'react-native';
import CustomButton from '../CustomButton/CustomButton';
import {useNavigation} from '@react-navigation/native';

const SocialSignIn = () => {
  const navigation = useNavigation();
  const onRegisterPress = () => {
    navigation.navigate('Home');
    console.warn('onRegiaterPress');
  };
  const onSignUpPress = () => {
    navigation.navigate('SignIn');
    console.warn('onSignUpPress');
  };
  const onSignInGooglePress = () => {
    console.warn('onSignInPressGoogle');
  };
  const onSignFacebookPress = () => {
    console.warn('onSignInPressFacebook');
  };
  const onForgetPasswordPress = () => {
    navigation.navigate('ForgetPassword');
    console.warn('onForgetPasswordPress');
  };
  return (
    <View>
      <CustomButton
        onPress={onRegisterPress}
        txt="Register"
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
        onPress={onSignUpPress}
        types={'TERTIARY'}
        txt="Do you already have an Account? Login"
      />
    </View>
  );
};
export default SocialSignIn;
