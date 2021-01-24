import React, {useEffect} from 'react';
import {Animated, Dimensions, Easing, StyleSheet} from 'react-native';

const {height, width} = Dimensions.get('window');

export const Diagonal = () => {
  const posX = new Animated.Value(0);
  const posY = posX.interpolate({
    inputRange: [0, width - 100],
    outputRange: [0, height - 100],
  });

  useEffect(() => {
    Animated.timing(posX, {
      toValue: width - 100,
      duration: 1100,
      delay: 1000,
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
              translateY: posY,
            },
          ],
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
