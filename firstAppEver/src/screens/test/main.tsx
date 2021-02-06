import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Home, Settings, Profile, Notifications} from './';

const Stack = createStackNavigator();

export const Main: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
      // screenOptions={{
      //   headerShown: false,
      //   cardStyle: {backgroundColor: 'transparent'},
      //   cardOverlayEnabled: true,
      //   cardStyleInterpolator: ({current: {progress}}) => ({
      //     cardStyle: {
      //       opacity: progress.interpolate({
      //         inputRange: [0, 0.5, 0.9, 1],
      //         outputRange: [0, 0.25, 0.7, 1],
      //       }),
      //     },
      //     overlayStyle: {
      //       opacity: progress.interpolate({
      //         inputRange: [0, 1],
      //         outputRange: [0, 0.5],
      //         extrapolate: 'clamp',
      //       }),
      //     },
      //   }),
      // }}
      >
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Settings"
          component={Settings}
          options={{
            headerStyle: {
              backgroundColor: '#3578e5',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Notification" component={Notifications} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
