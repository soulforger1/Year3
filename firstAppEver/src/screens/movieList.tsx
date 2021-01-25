import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {Post} from '../components/post';
import {movieData} from './movieData';

export const MovieList = () => {
  return (
    <ScrollView>
      <StatusBar barStyle="light-content" />
      <View style={styles.main}>
        <SafeAreaView style={styles.movieContainer}>
          <Text style={styles.movie}>Movies</Text>
        </SafeAreaView>
        {movieData.map((cur, index) => (
          <Post
            key={index}
            title={cur.title}
            rate={cur.rate}
            poster={cur.poster}
            date={cur.releaseDate}></Post>
        ))}
      </View>
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
