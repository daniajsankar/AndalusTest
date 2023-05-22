/* eslint-disable react-hooks/exhaustive-deps */
// @flow
import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image, Share } from 'react-native';
import styles from './styles';
import { SafeAreaView } from 'react-native-safe-area-context';
const ShareIcon = require("../../images/share.png");

export default function CatDetails({ navigation, route }) {
  const catDetails = route.params.catDetails;
  const share = async () => {
    try {
      const result = await Share.share({
        message: catDetails.url,
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <SafeAreaView style={styles.root}>
      <ScrollView showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentContainer}>
        <Image source={{ uri: catDetails.url }} style={styles.image} />
        <View style={styles.detailsWrapper}>
          <View style={styles.row}>
            <Text style={styles.name}>{catDetails.id}</Text>
            <TouchableOpacity style={styles.button} onPress={share}>
              <Image source={ShareIcon} style={styles.share} />
            </TouchableOpacity>
          </View>
          <Text style={styles.text}>width: {catDetails.width}</Text>
          <Text style={styles.text}>height: {catDetails.height}</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
