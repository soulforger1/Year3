import React, {useEffect} from 'react';
import {Animated, Dimensions, ImageBackground, StyleSheet} from 'react-native';
const {width} = Dimensions.get('window');

interface Props {
  item: object;
  index: number;
  scrollX: any;
}

export const SliderCard: React.FC<Props> = ({item, index, scrollX}) => {
  const position = Animated.subtract(index * width, scrollX);

  const scale = position.interpolate({
    inputRange: [width * -1, 0, width],
    outputRange: [0.3, 1, 0.3],
    extrapolate: 'clamp',
  });

  return (
    <ImageBackground
      source={{uri: item.poster}}
      style={styles.backgroundImage}
      blurRadius={30}>
      <Animated.Image
        source={{uri: item.poster}}
        style={[styles.poster, {transform: [{scale: scale}]}]}
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
