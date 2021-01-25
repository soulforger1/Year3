import React from 'react';
import {Animated, StyleSheet, View} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {SliderCard} from '../components';
import {movieData} from './movieData';

export const MovieSlider = () => {
  const scrollX = new Animated.Value(0);

  const onScroll = Animated.event(
    [{nativeEvent: {contentOffset: {x: scrollX}}}],
    {useNativeDriver: false},
  );

  return (
    <View style={styles.main}>
      <FlatList
        data={movieData}
        renderItem={({item, index}) => (
          <SliderCard {...{index, item, scrollX}} />
        )}
        keyExtractor={(_, index) => index + ''}
        pagingEnabled
        horizontal
        showsHorizontalScrollIndicator={false}
        onScroll={onScroll}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
});
