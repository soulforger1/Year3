import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

interface Props {
  navigation: any;
}

export const Profile: React.FC<Props> = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.titles}>Profile</Text>
      <TouchableOpacity onPress={() => navigation.push('Notification')}>
        <Text style={styles.button}>Notifications</Text>
      </TouchableOpacity>
    </View>
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
