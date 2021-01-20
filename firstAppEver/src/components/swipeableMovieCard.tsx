import React from 'react';
import {Animated, Image, StyleSheet, Text, View} from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';
const like = require('../assets/love.png');

const leftAction = (progress: any, dragX: any) => {
  const trans = dragX.interpolate({
    inputRange: [0, 100],
    outputRange: [0, 40],
  });

  return (
    <View style={[styles.action, styles.blue]}>
      <Animated.Text
        style={[
          styles.swipeableText,
          {
            transform: [{translateX: trans}],
          },
        ]}>
        Archive
      </Animated.Text>
    </View>
  );
};

const rightAction = (progress: any, dragX: any) => {
  const trans = dragX.interpolate({
    inputRange: [0, 100],
    outputRange: [0, 40],
  });

  return (
    <View style={[styles.action, styles.red]}>
      <Animated.Text
        style={[
          styles.swipeableText,
          {
            transform: [{translateX: trans}],
          },
        ]}>
        Delete
      </Animated.Text>
    </View>
  );
};

export const SwipeableCard: React.FC<any> = ({title, rate, poster, date}) => {
  return (
    <Swipeable
      childrenContainerStyle={styles.container}
      renderLeftActions={(progress, dragX) => leftAction(progress, dragX)}
      renderRightActions={(progress, dragX) => rightAction(progress, dragX)}>
      <Image style={styles.image} source={{uri: poster}}></Image>
      <View style={styles.infos}>
        <View style={{justifyContent: 'center', flex: 1}}>
          <Text style={styles.title}>{title}</Text>
        </View>
        <View style={{alignItems: 'center', flexDirection: 'row', flex: 1}}>
          <Text style={styles.rate}>{rate}</Text>
          <Text style={styles.date}>{date}</Text>
        </View>
      </View>
      <View style={styles.emojiContainer}>
        <Image style={styles.emoji} source={like}></Image>
      </View>
    </Swipeable>
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
    justifyContent: 'center',
    alignItems: 'center',
  },
  emoji: {
    width: 40,
    height: 40,
    marginLeft: 50,
  },
  action: {
    width: '100%',
    height: 150,
    flex: 1,
    justifyContent: 'center',
    borderRadius: 10,
  },
  blue: {
    backgroundColor: '#1E90FF',
    alignItems: 'flex-start',
  },
  red: {
    backgroundColor: 'red',
    alignItems: 'flex-end',
  },
  swipeableText: {
    color: 'white',
    fontSize: 20,
    fontWeight: '600',
  },
});
