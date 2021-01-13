import React, {useEffect, useState} from 'react';
import {View, Text, TextInput, StyleSheet, Settings} from 'react-native';

export const InputLocal: React.FC<any> = ({label, validate}) => {
  const [check, setCheck] = useState(
    StyleSheet.create({color: {borderColor: 'green'}}),
  );
  const [text, setText] = useState('');

  useEffect(() => {
    if (validate) {
      const color = validate(text);

      setCheck({
        ...check,
        color: {
          borderColor: color,
        },
      });
    }
  }, [text]);

  return (
    <View style={styles.container}>
      <Text style={styles.inputTitle}>{label}</Text>
      <TextInput
        style={[styles.input, check.color]}
        onChangeText={(text) => setText(text)}></TextInput>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 130,
    width: '90%',
  },
  inputTitle: {
    marginTop: 20,
  },
  input: {
    paddingLeft: 10,
    marginTop: 10,
    borderRadius: 10,
    height: 50,
    borderWidth: 1,
  },
});
