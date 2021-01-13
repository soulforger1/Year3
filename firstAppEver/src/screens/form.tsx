import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {InputLocal} from '../components/inputs';

const App = () => {
  const name = (text: string) => {
    const regex = /^[A-Za-z]+$/;
    var color = '';

    if (!text.match(regex)) {
      if (text.length === 0) color = 'green';
      else color = 'red';
    } else if (text.length > 2) color = 'green';
    else color = 'red';

    return color;
  };

  const age = (text: string) => {
    const regex = /^\d+$/;
    var color = '';

    if (!text.match(regex)) color = 'red';
    else if (parseInt(text) > 18 && parseInt(text) < 100) color = 'green';
    else color = 'red';
    color = text === '' ? 'green' : color;

    return color;
  };

  return (
    <ScrollView>
      <StatusBar barStyle="light-content" />
      <View style={styles.main}>
        <SafeAreaView>
          <Text style={styles.title}>Simple form</Text>
        </SafeAreaView>
        <InputLocal label="Your Name" validate={name}></InputLocal>
        <InputLocal label="Your Age" validate={age}></InputLocal>
        <InputLocal label="Your Email"></InputLocal>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'black',
  },
});

export default App;
