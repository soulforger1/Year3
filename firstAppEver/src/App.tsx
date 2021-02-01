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
} from './screens/';
import {SwitchedApp} from './components';

const App = () => {
  return <MovieList />;
};

export default App;
