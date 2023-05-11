import React, {useEffect, useState} from 'react';
import {
  Image,//
  Text,
  View,
  useWindowDimensions,
  StyleSheet,
  ScrollView,
} from 'react-native';
import CustomInput from '../../components/CustomInput/CustomeInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import {useNavigation} from '@react-navigation/native';

const ForgetPasswordScreen = () => {
  const navigation = useNavigation();
  const {width} = useWindowDimensions();
  const [username, setUsername] = useState('');

  const onSendPress = () => {
    navigation.navigate('NewPassword');
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
          placeholder="Enter UserName"
          value={username}
          setValue={setUsername}
        />
        <CustomButton onPress={onSendPress} txt="Send" types={`SECONDARY`} />
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
export default ForgetPasswordScreen;
