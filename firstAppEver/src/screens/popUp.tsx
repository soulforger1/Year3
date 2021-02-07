import React from 'react';
import {Button, Dimensions, StyleSheet, Text, View} from 'react-native';
const {width, height} = Dimensions.get('window');

interface Props {
  navigation?: any;
}

export const PopUp: React.FC<Props> = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Button onPress={() => navigation.pop()} title="Close" />
      <Text style={styles.text}>This is pop up</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: width * 0.8,
    height: height * 0.8,
    marginTop: height * 0.1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'grey',
    borderRadius: 10,
  },
  text: {
    fontSize: 30,
    color: 'white',
  },
});
