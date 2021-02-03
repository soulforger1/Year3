import React, {useEffect} from 'react';
import {Animated, Image, StyleSheet, View} from 'react-native';
import {PanGestureHandler, State} from 'react-native-gesture-handler';
const loveIcon = require('../assets/love.png');

export const PanGesture = () => {
  const translate = new Animated.ValueXY();

  const dragg = (event: any) => {
    if (event.nativeEvent.state === State.ACTIVE) {
      const translationX = event.nativeEvent.translationX;
      const translationY = event.nativeEvent.translationY;
      translate.x.setValue(translationX);
      translate.y.setValue(translationY);
    }
  };

  const _onGestureEvent = Animated.event(
    [
      {
        nativeEvent: {
          translationX: translate.x,
          translateY: translate.y,
        },
      },
    ],
    {useNativeDriver: true},
  );

  return (
    <View style={styles.main}>
      <PanGestureHandler onGestureEvent={(event) => dragg(event)}>
        <Animated.View
          style={{
            transform: [{translateX: translate.x}, {translateY: translate.y}],
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
