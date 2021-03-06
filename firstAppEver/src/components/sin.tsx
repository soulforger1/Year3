import React, {useEffect} from 'react';
import {Animated, Dimensions, Easing, StyleSheet} from 'react-native';

const {height, width} = Dimensions.get('window');

const getRange = (start: number, end: number, size: number) => {
  const array = new Array(size).fill(0);
  return array.map((cur, index) => start + (index * (end - start)) / size);
};

export const Sin = () => {
  const animate = new Animated.Value(0);

  const degree = animate.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 2 * Math.PI],
  });
  const posY = animate.interpolate({
    inputRange: [0, 1],
    outputRange: [0, height - 100],
  });
  const posX = degree.interpolate({
    inputRange: getRange(0, 2 * Math.PI, 360),
    outputRange: getRange(0, 2 * Math.PI, 360).map(
      (x) => Math.sin(x) * (width / 4),
    ),
  });

  useEffect(() => {
    Animated.timing(animate, {
      toValue: 1,
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
