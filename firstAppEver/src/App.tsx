import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {Post} from './components/post';

const App = () => {
  const state = [
    {
      title: 'Wonder Woman 1984',
      rate: '5.5',
      poster:
        'https://m.media-amazon.com/images/M/MV5BNWY2NWE0NWEtZGUwMC00NWMwLTkyNzUtNmIxMmIyYzA0MjNiXkEyXkFqcGdeQXVyMTA2OTQ3MTUy._V1_UX182_CR0,0,182,268_AL_.jpg',
      releaseDate: '25 December 2020 (USA)',
    },
    {
      title: 'The Croods: A New Age',
      rate: '7.0',
      poster:
        'https://m.media-amazon.com/images/M/MV5BNGU1NGNiYzYtMTQ2Ni00M2ZlLTg0N2QtMDFhMzNjNzcyMGYyXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_UX182_CR0,0,182,268_AL_.jpg',
      releaseDate: '25 November 2020 (USA)',
    },
    {
      title: 'News of the World ',
      rate: '7.2',
      poster:
        'https://m.media-amazon.com/images/M/MV5BNjFiNDA1MTktYTQxYy00MGVjLWJhMGItOWRlNDE5M2U2ZjRkXkEyXkFqcGdeQXVyMDA4NzMyOA@@._V1_UX182_CR0,0,182,268_AL_.jpg',
      releaseDate: '25 December 2020 (USA)',
    },
    {
      title: 'Monster Hunter ',
      rate: '5.3',
      poster:
        'https://m.media-amazon.com/images/M/MV5BOGU3NTFmNjYtODc3Ny00MWEzLWI3M2ItZjE3NDgwMTI0MzkzXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_UX182_CR0,0,182,268_AL_.jpg',
      releaseDate: '18 December 2020 (USA)',
    },
    {
      title: 'Fatale',
      rate: '4.8',
      poster:
        'https://m.media-amazon.com/images/M/MV5BZmI2OThhMmYtZjVjOC00NWE3LWIwOGItMWM1MTEzMGNiOTM4XkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_UX182_CR0,0,182,268_AL_.jpg',
      releaseDate: '18 December 2020 (USA)',
    },
    {
      title: 'Promising Young Woman ',
      rate: '7.4',
      poster:
        'https://m.media-amazon.com/images/M/MV5BZDViMzBiNGMtZTIyNS00NzI4LWE3NDMtNmM1NDk0NzBlMWRlXkEyXkFqcGdeQXVyMTA2MDU0NjM5._V1_UX182_CR0,0,182,268_AL_.jpg',
      releaseDate: '25 December 2020 (USA)',
    },
    {
      title: 'Pinocchio ',
      rate: '6.2',
      poster:
        'https://m.media-amazon.com/images/M/MV5BNzgxNWJiOWQtZDA5Mi00NjBkLWIxMzUtZTg3Yjk5NjYyMDZjXkEyXkFqcGdeQXVyMDA4NzMyOA@@._V1_UX182_CR0,0,182,268_AL_.jpg',
      releaseDate: '25 December 2020 (USA)',
    },
  ];

  return (
    <ScrollView>
      <StatusBar barStyle="light-content" />
      <View style={styles.main}>
        <SafeAreaView style={styles.movieContainer}>
          <Text style={styles.movie}>Movies</Text>
        </SafeAreaView>
        {state.map((cur, index) => (
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

export default App;
