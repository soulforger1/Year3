import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {ChatScreen} from '../screens/bottomTabs/chat';
import {SettingsScreen} from '../screens/bottomTabs/settings';
import {NavigationContainer} from '@react-navigation/native';
import {BottomTabBar} from '../components/bottomTabBar';
import {CalendarScreen} from '../screens/bottomTabs/calendar';
import {ProfileScreen} from '../screens/bottomTabs/profile';
import {NewsScreen} from '../screens/bottomTabs/news';

const Tab = createBottomTabNavigator();

export const BottomTabs = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator tabBar={(props) => <BottomTabBar {...props} />}>
        <Tab.Screen name="News" component={NewsScreen} />
        <Tab.Screen name="Chat" component={ChatScreen} />
        <Tab.Screen name="Calendar" component={CalendarScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
