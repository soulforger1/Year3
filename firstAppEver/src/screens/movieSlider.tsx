import React, {useCallback, useEffect, useState} from 'react';
import {Animated, StyleSheet, View} from 'react-native';
import {SliderCard} from '../components';
import firestore from '@react-native-firebase/firestore';

export const MovieSlider = () => {
  const [datas, setDatas] = useState([]);

  firestore()
    .collection('animeRank')
    .onSnapshot((res) => {
      const data = res.docs.map((cur) => {
        return cur.data();
      });
      setDatas(data);
    });

  const scrollX = new Animated.Value(0);

  // const onScroll = Animated.event(
  //   [{nativeEvent: {contentOffset: {y: scrollY}}}],
  //   {useNativeDriver: true},
  // );
  const onScroll = Animated.event(
    [{nativeEvent: {contentOffset: {x: scrollX}}}],
    {useNativeDriver: false},
  );

  return (
    <View style={styles.main}>
      <Animated.FlatList
        data={datas}
        renderItem={({index, item}) => (
          <SliderCard {...{index, item, scrollX}} />
        )}
        keyExtractor={(_, index) => index.toString()}
        onScroll={onScroll}
        pagingEnabled
        horizontal
        showsHorizontalScrollIndicator={false}
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
