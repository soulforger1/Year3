import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import {MovieList, PopUp} from './';
import {Button, StyleSheet, Text, View} from 'react-native';

const Stack = createStackNavigator();

export const MovieListNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="home" mode="modal">
        <Stack.Screen
          name="home"
          component={MovieList}
          options={({navigation}) => ({
            headerShown: true,
            headerTitle: (props) => (
              <View style={styles.movieContainer}>
                <Text style={styles.movieName}>Movie</Text>
              </View>
            ),
            headerStyle: {
              backgroundColor: '#343434',
              height: 130,
            },
            headerRight: () => (
              <Button
                title="popUp"
                color="#C0C0C0"
                onPress={() => navigation.push('popUp')}
              />
            ),
          })}
        />
        <Stack.Screen
          name="popUp"
          component={PopUp}
          options={{
            headerShown: false,
            cardStyle: {
              backgroundColor: 'transparent',
              justifyContent: 'center',
              alignItems: 'center',
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  movieContainer: {
    height: 130,
    width: '100%',
    justifyContent: 'center',
  },
  movieName: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'white',
    marginLeft: 20,
  },
});
