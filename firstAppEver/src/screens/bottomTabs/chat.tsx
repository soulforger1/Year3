import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export const ChatScreen = () => {
  return (
    <View style={styles.main}>
      <Text>Chat</Text>
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
