import React from 'react';
import {Animated, Image, StyleSheet, Text, View} from 'react-native';
import {Background, Padding, Stack} from './layout';
const like = require('../assets/love.png');

export const Post: React.FC<any> = ({title, rate, poster, date}) => {
  return (
    <Animated.View style={styles.container}>
      <Background height={150} width={110} url={poster}></Background>
      <Padding width="34%" align="center" left={16} top={20}>
        <View style={{justifyContent: 'center', flex: 1}}>
          <Text style={styles.title}>{title}</Text>
        </View>
        <Stack gap={0}>
          <Text style={styles.rate}>{rate}</Text>
          <Text style={styles.date}>{date}</Text>
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
    width: '87%',
    height: 150,
    backgroundColor: '#444444',
    borderRadius: 10,
    flexDirection: 'row',
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
