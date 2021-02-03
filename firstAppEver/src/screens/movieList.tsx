import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {Post} from '../components/post';
import firestore from '@react-native-firebase/firestore';
import {Background, Stack} from '../components/layout';

export const MovieList = () => {
  const [datas, setDatas] = useState([]);

  firestore()
    .collection('animeRank')
    .onSnapshot((res) => {
      const data = res.docs.map((cur) => {
        return cur.data();
      });
      setDatas(data);
    });

  return (
    <ScrollView>
      <StatusBar barStyle="light-content" />
      <Background height="100%" width="100%" color="#343434" align="center">
        <SafeAreaView style={styles.movieContainer}>
          <Text style={styles.movie}>Movies</Text>
        </SafeAreaView>
        <Stack gap={20} width="100%" align="center">
          {datas.map((cur, index) => (
            <Post
              key={index}
              title={cur.title}
              rate={cur.rate}
              poster={cur.poster}
              date={cur.releaseDate}></Post>
          ))}
        </Stack>
      </Background>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#343434',
  },
  movieContainer: {
    height: 130,
    width: '100%',
  },
  movie: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'white',
    marginLeft: 20,
  },
});
