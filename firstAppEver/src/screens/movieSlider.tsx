import React, {useCallback, useEffect, useRef, useState} from 'react';
import {Animated, StyleSheet, View} from 'react-native';
import {SliderCard} from '../components';
import firestore from '@react-native-firebase/firestore';

export const MovieSlider = () => {
  const [datas, setDatas] = useState([]);

  firestore()
    .collection('animeRank')
    .onSnapshot((res) => {
      const data: any = res.docs.map((cur) => {
        return cur.data();
      });
      setDatas(data);
    });

  const scrollX = useRef(new Animated.Value(0)).current;

  const onScroll = Animated.event(
    [{nativeEvent: {contentOffset: {x: scrollX}}}],
    {useNativeDriver: false},
  );

  return (
    <View style={styles.main}>
      <Animated.FlatList
        data={datas}
        renderItem={({index, item}) => (
          <SliderCard index={index} item={item} scrollX={scrollX} />
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
