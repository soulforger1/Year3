import React, {useState} from 'react';
import {
  Animated,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {Post} from '../components/post';
import firestore from '@react-native-firebase/firestore';
import {Background} from '../components/layout';

interface Props {
  navigation?: any;
}

export const MovieList: React.FC<Props> = ({navigation}) => {
  const [datas, setDatas] = useState<any>([]);
  const scrollY = new Animated.Value(0);

  firestore()
    .collection('animeRank')
    .onSnapshot((res) => {
      const data: any = res.docs.map((cur) => {
        return cur.data();
      });
      setDatas(data);
    });

  const onScroll = Animated.event(
    [{nativeEvent: {contentOffset: {y: scrollY}}}],
    {useNativeDriver: true},
  );

  return (
    <View>
      <StatusBar barStyle="light-content" />
      <Background height="100%" width="100%" color="#343434" align="center">
        <Animated.FlatList
          data={datas}
          renderItem={({index, item}) => (
            <Post item={item} index={index} scrollY={scrollY} />
          )}
          keyExtractor={(_, index) => index.toString()}
          onScroll={onScroll}
          showsVerticalScrollIndicator={false}
        />
      </Background>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#343434',
  },
});
