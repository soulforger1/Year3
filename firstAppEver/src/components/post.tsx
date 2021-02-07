import React, {useEffect} from 'react';
import {
  Animated,
  Dimensions,
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {Background, Padding, Stack} from './layout';
const like = require('../assets/love.png');
const {width, height} = Dimensions.get('window');

interface Props {
  item: any;
  index: any;
  scrollY: any;
}

export const Post: React.FC<Props> = ({item, index, scrollY}) => {
  const num = 160;
  const position = Animated.subtract(index * num, scrollY);

  const scale = position.interpolate({
    inputRange: [num * -1, 0, height - 300, height - 150],
    outputRange: [0.5, 1, 1, 0.5],
    extrapolate: 'clamp',
  });

  return (
    <Animated.View style={[styles.container, {transform: [{scale}]}]}>
      <Background height={150} width={110} url={item.poster}></Background>
      <Padding width="34%" align="center" left={16} top={20}>
        <View style={{justifyContent: 'center', flex: 1}}>
          <Text style={styles.title}>{item.title}</Text>
        </View>
        <Stack gap={0}>
          <Text style={styles.rate}>{item.rate}</Text>
          <Text style={styles.date}>{item.date}</Text>
        </Stack>
      </Padding>
      <View style={styles.emojiContainer}>
        <Image style={styles.emoji} source={like}></Image>
      </View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: width * 0.9,
    height: 150,
    backgroundColor: '#444444',
    borderRadius: 10,
    flexDirection: 'row',
    marginBottom: 20,
  },
  title: {
    fontSize: 19,
    color: 'white',
  },
  rate: {
    fontSize: 19,
    color: 'pink',
    marginRight: 10,
  },
  date: {
    fontSize: 10,
    color: 'white',
  },
  emojiContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emoji: {
    width: 40,
    height: 40,
    marginLeft: 50,
  },
});
