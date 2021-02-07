import React from 'react';
import {GestureHandler} from './screens/gestureHandler';
import {
  AnimatedImage,
  AnimatedScreen,
  Appearance,
  Form,
  Linear,
  PanGesture,
  SwipeableList,
  MovieList,
  MovieSlider,
  Contacts,
  Main,
  MovieListNavigator,
} from './screens/';
import {SwitchedApp} from './components';
import {Image, View} from 'react-native';
import {Background, Margin, Padding, Stack} from './components/layout';
import {ScrollView} from 'react-native-gesture-handler';

const alex = require('./assets/alex.png');

const App = () => {
  return <MovieListNavigator />;
};

export default App;
