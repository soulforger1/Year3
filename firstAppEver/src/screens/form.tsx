import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {InputLocal} from '../components/inputs';

export const Form = () => {
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
        <TouchableOpacity>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Submit</Text>
          </View>
        </TouchableOpacity>
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
  button: {
    width: 200,
    height: 50,
    backgroundColor: 'green',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
