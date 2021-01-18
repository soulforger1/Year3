import React, {useState} from 'react';
import {
  Alert,
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  Touchable,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from 'react-native';

const App = () => {
  const [count, setCount] = useState(1);

  const alert = () =>
    Alert.alert(
      'Alert Title',
      'You tapped',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ],
      {cancelable: false},
    );
  return (
    <ScrollView>
      <StatusBar barStyle="light-content" />
      <SafeAreaView></SafeAreaView>
      <View style={styles.main}>
        <TouchableOpacity onPress={() => setCount(count + 1)}>
          <Text>{count}</Text>
        </TouchableOpacity>
        <Button title="alert" onPress={alert} />
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
