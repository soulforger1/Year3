import React, {useEffect} from 'react';
import {Animated, Dimensions, Easing, StyleSheet, View} from 'react-native';
import {TranslateX, Diagonal, Sin} from '../components/';
// safeArea ashiglasan bol 60 iig hashad bolno
const {height, width} = Dimensions.get('window');

// interplate
// layoutAnimation

export const Linear = () => {
  return (
    <View style={styles.main}>
      <TranslateX />
      {/* <Diagonal /> */}
      {/* <Sin /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
    // alignItems: 'center',
  },
});
