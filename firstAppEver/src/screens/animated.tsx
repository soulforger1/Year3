import React, {useEffect, useState} from 'react';
import {Animated, StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

export const AnimatedScreen = () => {
  const scale = new Animated.Value(1);
  const rotateY = new Animated.Value(0);
  const rotate = new Animated.Value(0);
  const spin = rotate.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '180deg'],
  });
  const spinY = rotateY.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '45deg'],
  });
  const duration = 700;

  const scaleFunc = () => {
    Animated.timing(scale, {
      toValue: 2,
      duration: duration,
      useNativeDriver: true,
    }).start(() => {
      Animated.timing(scale, {
        toValue: 1,
        duration: duration,
        useNativeDriver: true,
      }).start();
    });
  };
  const rotateYFunc = () => {
    Animated.timing(rotateY, {
      toValue: 2,
      duration: 1400,
      useNativeDriver: true,
    }).start(() => {
      Animated.timing(rotateY, {
        toValue: 0,
        duration: 1400,
        useNativeDriver: true,
      }).start();
    });
  };
  const rotateFunc = () => {
    Animated.timing(rotate, {
      toValue: 2,
      duration: 100,
      useNativeDriver: true,
    }).start(() => {
      Animated.timing(rotate, {
        toValue: 0,
        duration: 100,
        useNativeDriver: true,
      }).start();
    });
  };

  return (
    <View style={styles.main}>
      <Animated.View
        style={[
          styles.box,
          {
            transform: [
              {
                scale: scale,
              },
              {
                rotate: spin,
              },
              {
                rotateY: spinY,
              },
            ],
          },
        ]}></Animated.View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={scaleFunc}>
          <Text style={styles.buttonText}>Scale</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={rotateYFunc}>
          <Text style={styles.buttonText}>Flip</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={rotateFunc}>
          <Text style={styles.buttonText}>Rotate</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    backgroundColor: 'black',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    width: 120,
    height: 120,
    backgroundColor: 'dodgerblue',
    borderRadius: 10,
  },
  buttonContainer: {
    marginTop: 40,
    flexDirection: 'row',
  },
  button: {
    width: 100,
    height: 40,
    borderRadius: 10,
    backgroundColor: 'dodgerblue',
    marginLeft: 10,
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
  },
});
