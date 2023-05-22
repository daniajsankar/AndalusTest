/* eslint-disable react-hooks/exhaustive-deps */
// @flow
import React, { useState } from 'react';
import { View, Text, KeyboardAvoidingView } from 'react-native';
import styles from './styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import auth from '@react-native-firebase/auth';
import Input from '../../components/Input';
import Button from '../../components/Button';
import Toast from "react-native-toast-message";

export default function Login({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const onLogin = () => {
    setLoading(true);
    auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        setLoading(false);
        navigation.reset({
          index: 0,
          routes: [{ name: "Home" }],
        });
        console.log('User account created & signed in!');
      })
      .catch(error => {
        setLoading(false);
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
        }
        Toast.show({
          type: "error",
          text1: error.message,
        });
        console.error(error);
      });
  }

  return (
    <SafeAreaView>
      <KeyboardAvoidingView behavior={"height"}>
        <View style={styles.wrapper}>
          <Text style={styles.title}>Login</Text>
          <Input
            value={email}
            onChangeText={setEmail}
            placeholder={'Email'}
            keyboardType={"email-address"}
          />
          <Input
            value={password}
            onChangeText={setPassword}
            placeholder={'Password'}
            secureTextEntry
          />
          <Button
            title={"continue"}
            onPress={onLogin}
            isDisabled={!email || !password}
            isLoading={loading} />
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView >
  );
}
