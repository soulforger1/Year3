import React, {useEffect, useState} from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {AppearanceProvider, useColorScheme} from 'react-native-appearance';

const App = () => {
  const [state, setState] = useState('');
  const colorScheme = useColorScheme();

  const styles = StyleSheet.create({
    main: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    text: {
      fontSize: 20,
      fontWeight: 'bold',
      color: colorScheme === 'dark' ? 'purple' : 'yellow',
    },
  });

  useEffect(() => {
    if (colorScheme === 'dark') setState('🌙');
    else setState('🌞');
  }, [colorScheme]);

  return (
    <AppearanceProvider>
      <SafeAreaView style={styles.main}>
        <Text style={styles.text}>You slected {state} mode.</Text>
      </SafeAreaView>
    </AppearanceProvider>
  );
};

export default App;
