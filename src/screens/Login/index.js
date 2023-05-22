/* eslint-disable react-hooks/exhaustive-deps */
// @flow
import React, { useState, useEffect, useContext, useRef } from 'react';
import { View, TextInput, Text } from 'react-native';
import styles from './styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import Input from '../../components/Input';
import Button from '../../components/Button';

export default function Login({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onLogin = () => {

  }

  return (
    <SafeAreaView>
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
        <Button title={"continue"} onPress={onLogin} />
      </View>
    </SafeAreaView>
  );
}
