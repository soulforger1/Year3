import React from 'react';
import {
  Animated,
  Dimensions,
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';
const alex = require('../assets/alex.png');
const marty = require('../assets/marty.png');
const {width, height} = Dimensions.get('window');

export const AnimatedImage = () => {
  const left = new Animated.Value(0);
  const right = left.interpolate({
    inputRange: [0, width / 2 - 100],
    outputRange: [0, (width / 2 - 100) * -1],
  });
  const toTop = new Animated.Value(0);

  Animated.timing(left, {
    toValue: width / 2 - 100,
    duration: 1000,
    useNativeDriver: true,
  }).start();

  Animated.timing(toTop, {
    toValue: (height / 2) * -1,
    duration: 2000,
    delay: 1000,
    useNativeDriver: true,
  }).start();

  return (
    <View style={styles.main}>
      <Animated.Image
        style={[
          styles.image,
          {
            transform: [{translateX: left}],
          },
        ]}
        source={alex}
      />
      <Animated.View
        style={[
          {
            transform: [{translateY: toTop}],
          },
        ]}>
        <Text style={styles.text}>Friendship</Text>
      </Animated.View>
      <Animated.Image
        style={[
          styles.image,
          {
            transform: [
              {
                translateX: right,
              },
            ],
          },
        ]}
        source={marty}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: 'black',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  image: {
    width: 100,
    height: 100,
  },
  text: {
    fontSize: 20,
    color: 'white',
  },
});
