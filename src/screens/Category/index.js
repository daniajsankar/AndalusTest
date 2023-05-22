/* eslint-disable react-hooks/exhaustive-deps */
// @flow
import React, { useState, useEffect, useContext, useRef } from 'react';
import { View, Text, ActivityIndicator, ScrollView, TouchableOpacity, Image } from 'react-native';
import styles from './styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTheme } from '@react-navigation/native';
import api from '../../api';


async function getCategory(id) {
  const response = await api.get_category(id);
  if (response && response.status >= 200 && response.status < 300) {
    return response.data;
  }
  return [];
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export default function Category({ navigation, route }) {
  const categoryID = route.params.categoryID;
  const categoryName = route.params.categoryName;
  const [cats, setCats] = useState([]);
  const [loading, setLoading] = useState(true);

  const {
    colors: { primary },
  } = useTheme();

  useEffect(() => {
    navigation.setOptions({ title: `${capitalize(categoryName)} Category` })
    getCategory(categoryID).then((res) => {
      console.log(res);
      setCats(res);
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
            {cats.map((cat) => {
              return <TouchableOpacity key={cat.id} style={styles.item}
                onPress={() => navigation.navigate("Cat Details", { catDetails: cat })}>
                <View style={styles.container}>
                  <Image source={{ uri: cat.url }} style={styles.image} />
                  <Text style={styles.text}>{cat.id}</Text>
                </View>
              </TouchableOpacity>
            })}
          </View>
        </ScrollView>
      }
    </SafeAreaView>
  );
}
