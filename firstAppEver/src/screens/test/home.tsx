import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';

interface Props {
  navigation: any;
}

export const Home: React.FC<Props> = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      {/* <View style={styles.container}> */}
      <Text style={styles.titles}>Home</Text>
      <TouchableOpacity onPress={() => navigation.push('Settings')}>
        <Text style={styles.button}>Settings</Text>
      </TouchableOpacity>
      {/* </View> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titles: {
    fontSize: 25,
  },
  button: {
    fontSize: 20,
    marginTop: 20,
    color: '#3578e5',
  },
});
