import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export const ProfileScreen = () => {
  return (
    <View style={styles.main}>
      <Text>Profile</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
