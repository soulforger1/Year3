import React, {createRef} from 'react';
import {Alert, Animated, Image, StyleSheet, Text, View} from 'react-native';
import {
  LongPressGestureHandler,
  State,
  TapGestureHandler,
} from 'react-native-gesture-handler';
const loveIcon = require('../assets/love.png');

export const GestureHandler = () => {
  const doubleTapRef = createRef();
  const translateX = new Animated.Value(0);

  const singleTap = (state: any) => {
    if (state.nativeEvent.state === State.ACTIVE) Alert.alert('Single tap');
  };

  const doubleTap = (state: any) => {
    if (state.nativeEvent.state === State.ACTIVE) Alert.alert('Double tap');
  };
  const longPress = (state: any) => {
    if (state.nativeEvent.state === State.ACTIVE) Alert.alert('Long tap');
  };

  return (
    <View style={styles.main}>
      <LongPressGestureHandler
        onHandlerStateChange={(state) => longPress(state)}>
        <TapGestureHandler
          onHandlerStateChange={(state) => singleTap(state)}
          waitFor={doubleTapRef}>
          <Animated.View
            style={[styles.main, {transform: [{translateX: translateX}]}]}>
            <TapGestureHandler
              ref={doubleTapRef}
              numberOfTaps={2}
              onHandlerStateChange={(state) => doubleTap(state)}>
              <Image style={styles.icon} source={loveIcon}></Image>
            </TapGestureHandler>
          </Animated.View>
        </TapGestureHandler>
      </LongPressGestureHandler>
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
