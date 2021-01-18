import React from 'react';
import {AppearanceProvider} from 'react-native-appearance';
import SwitchedApp from './components/switchedAppearence';

const App = () => {
  return (
    <AppearanceProvider>
      <SwitchedApp />
    </AppearanceProvider>
  );
};

export default App;
