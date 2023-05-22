/* eslint-disable react-hooks/exhaustive-deps */
// @flow
import React, { useState, useEffect, useContext, useRef } from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Home({ navigation }) {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  return (
    <SafeAreaView>
      <View style={styles.wrapper}>
       
      </View>
    </SafeAreaView>
  );
}
