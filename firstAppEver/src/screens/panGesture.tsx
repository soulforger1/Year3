import React from 'react';
import {Animated, Image, Pressable, StyleSheet, View} from 'react-native';
import {PanGestureHandler, State} from 'react-native-gesture-handler';
const loveIcon = require('../assets/love.png');

export const PanGesture = () => {
  const translateX = new Animated.Value(0);
  const translateY = new Animated.Value(0);

  const dragg = (event: any) => {
    if (event.nativeEvent.state === State.ACTIVE) {
      const translationX = event.nativeEvent.translationX;
      const translationY = event.nativeEvent.translationY;
      translateX.setValue(translationX);
      translateY.setValue(translationY);
    // console.log(event.nativeEvent)
    }
  };

  return (
    <View style={styles.main}>
      <PanGestureHandler onGestureEvent={(event) => dragg(event)}>
        <Animated.View
          style={{
            transform: [{translateX: translateX}, {translateY: translateY}],
          }}>
          <Image style={styles.icon} source={loveIcon}></Image>
        </Animated.View>
      </PanGestureHandler>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: 100,
    height: 100,
  },
});
