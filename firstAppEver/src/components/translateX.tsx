import React, {useEffect} from 'react';
import {Animated, Dimensions, Easing, StyleSheet} from 'react-native';

const {height, width} = Dimensions.get('window');

export const TranslateX = () => {
  const posX = new Animated.Value(0);
  const opacity = posX.interpolate({
    inputRange: [0, width - 100],
    outputRange: [0, 1],
  });
  const scale = opacity.interpolate({
    inputRange: [0, 0.7, 1],
    outputRange: [0, 0.3, 1],
  });

  useEffect(() => {
    Animated.timing(posX, {
      toValue: width - 100,
      duration: 1000,
      delay: 1000,
      easing: Easing.bounce,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <Animated.View
      style={[
        styles.circle,
        {
          transform: [
            {
              translateX: posX,
            },
            {
              scale,
            },
          ],
          opacity,
        },
      ]}></Animated.View>
  );
};

const styles = StyleSheet.create({
  circle: {
    height: 100,
    width: 100,
    borderRadius: 50,
    borderColor: 'white',
    borderWidth: 2,
    backgroundColor: 'grey',
  },
});
