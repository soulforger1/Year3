import React, {useState} from 'react';
import {StyleSheet, View, Text, Image, TextInput} from 'react-native';

const App = () => {
  const [state, setState] = useState('');

  return (
    <>
      <View style={styles.main}>
        <View
          style={{
            height: 100,
            width: '100%',
            backgroundColor: 'yellow',
          }}></View>
        <View style={{flex: 1, width: '100%', flexDirection: 'row'}}>
          <View style={{flex: 1, backgroundColor: 'blue'}}></View>
          <View style={{flex: 3}}>
            <View
              style={{
                height: 120,
                width: '100%',
                backgroundColor: 'grey',
              }}></View>
            <View
              style={{
                flex: 1,
                width: '100%',
                backgroundColor: 'green',
              }}></View>
            <View
              style={{
                height: 150,
                width: '100%',
                backgroundColor: 'white',
              }}></View>
          </View>
        </View>
        <View
          style={{height: 100, width: '100%', backgroundColor: 'red'}}></View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
