import React, {useEffect} from 'react';
import {Animated, Dimensions, ImageBackground, StyleSheet} from 'react-native';
const {width} = Dimensions.get('window');

export const SliderCard: React.FC<any> = ({item, index, scrollX}) => {
  const position = Animated.subtract(index * 230, scrollX);

  const scale = position.interpolate({
    inputRange: [-230, 0, width],
    outputRange: [0.3, 1, 0.3],
  });

  useEffect(() => {
    // if (index === 2) {
    console.log(scrollX, index * 230, position);
    // }
  }, []);

  return (
    <ImageBackground
      source={{uri: item.poster}}
      style={styles.backgroundImage}
      blurRadius={30}>
      <Animated.Image
        source={{uri: item.poster}}
        style={[styles.poster, {transform: [{scale: 1}]}]}
      />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    width: width,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  poster: {
    width: 230,
    height: 350,
    borderRadius: 30,
  },
});
