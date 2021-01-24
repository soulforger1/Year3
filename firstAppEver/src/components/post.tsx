import React from 'react';
import {Animated, Image, StyleSheet, Text, View} from 'react-native';
const like = require('../assets/love.png');

export const Post: React.FC<any> = ({title, rate, poster, date}) => {
  const index = new Animated.Value(0);
  const rotate = index.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });
  const scale = index.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1],
  });

  Animated.timing(index, {
    toValue: 1,
    duration: 1000,
    useNativeDriver: true,
  }).start();

  return (
    <View style={styles.container}>
      <Animated.Image
        style={[
          styles.image,
          {
            transform: [{rotate}],
          },
        ]}
        source={{uri: poster}}></Animated.Image>
      <Animated.View
        style={[
          styles.infos,
          {
            transform: [{scale}],
          },
        ]}>
        <View style={{justifyContent: 'center', flex: 1}}>
          <Text style={styles.title}>{title}</Text>
        </View>
        <View style={{alignItems: 'center', flexDirection: 'row', flex: 1}}>
          <Text style={styles.rate}>{rate}</Text>
          <Text style={styles.date}>{date}</Text>
        </View>
      </Animated.View>
      <View style={styles.emojiContainer}>
        <Image style={styles.emoji} source={like}></Image>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '87%',
    height: 150,
    backgroundColor: '#444444',
    marginBottom: 20,
    borderRadius: 10,
    flexDirection: 'row',
  },
  image: {
    width: 110,
    borderRadius: 10,
  },
  infos: {
    flex: 1,
    paddingLeft: 16,
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
    // backgroundColor: 'white'
    justifyContent: 'center',
    alignItems: 'center',
  },
  emoji: {
    width: 40,
    height: 40,
    marginLeft: 50,
  },
});
