import React, {useEffect} from 'react';
import {
  Animated,
  Dimensions,
  Image,
  ImageBackground,
  StyleSheet,
} from 'react-native';
const {height, width} = Dimensions.get('window');

export const SliderCard: React.FC<any> = ({item, index, scrollX}) => {
  const position = Animated.subtract(index * 230, scrollX);

  const scale = position.interpolate({
    inputRange: [-230, 0, width],
    outputRange: [0.5, 1, 0.5],
    extrapolate: 'clamp',
  });

  useEffect(() => {
    if (index === 0) {
      console.log(scrollX);
    }
  }, []);

  return (
    <ImageBackground
      source={{uri: item.poster}}
      style={styles.backgroundImage}
      blurRadius={30}>
      <Animated.Image
        source={{uri: item.poster}}
        style={[styles.poster, {transform: [{scale}]}]}
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
