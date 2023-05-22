/* eslint-disable react-hooks/exhaustive-deps */
// @flow
import React, { useState, useEffect } from 'react';
import { View, Text, ActivityIndicator, ScrollView, TouchableOpacity } from 'react-native';
import styles from './styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTheme } from '@react-navigation/native';
import api from '../../api';


async function getCategories() {
  const response = await api.get_categories();
  if (response && response.status >= 200 && response.status < 300) {
    return response.data;
  }
  return [];
}

export default function Home({ navigation }) {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  const {
    colors: { primary },
  } = useTheme();

  useEffect(() => {
    getCategories().then((res) => {
      console.log(res);
      setCategories(res);
      setLoading(false);
    }).catch((error) => {
      console.error(error);
      setLoading(false);
    });
  }, []);
  return (
    <SafeAreaView style={styles.root}>
      {loading ? <View style={styles.loadingWrapper}>
        <ActivityIndicator size="large" color={primary} /></View> :
        <ScrollView showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.contentContainer}>
          <View style={styles.wrapper}>
            {categories.map((cat) => {
              return <TouchableOpacity key={cat.id} style={styles.category}
                onPress={() => navigation.navigate('Category', { categoryID: cat.id, categoryName: cat.name })}>
                <Text style={styles.text}>{cat.name}</Text>
              </TouchableOpacity>
            })}
          </View>
        </ScrollView>
      }
    </SafeAreaView>
  );
}
