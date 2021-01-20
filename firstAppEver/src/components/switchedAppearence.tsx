import React, {useEffect, useState} from 'react';
import {SafeAreaView, StyleSheet, Switch, Text, View} from 'react-native';
import {useColorScheme} from 'react-native-appearance';

export const SwitchedApp: React.FC<any> = () => {
  const [state, setState] = useState('');
  const [isEnabled, setIsEnabled] = useState(false);
  const color = useColorScheme();
  const [isDark, setIsDark] = useState(color === 'dark');

  const styles = StyleSheet.create({
    main: {
      backgroundColor: isDark ? '#121212' : '#FFFFFF',
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    text: {
      fontSize: 20,
      fontWeight: 'bold',
      color: isDark ? '#FFFFFF' : '#121212',
    },
  });

  useEffect(() => {
    if (isDark) setState('🌙');
    else setState('🌞');
  }, [isDark]);

  useEffect(() => {
    if (color === 'dark') setIsDark(true);
    else setIsDark(false);
  }, [color]);

  useEffect(() => {
    if (isDark) setIsDark(false);
    else setIsDark(true);
  }, [isEnabled]);

  return (
    <SafeAreaView style={styles.main}>
      <View>
        <Switch
          trackColor={{false: '#767577', true: '#81b0ff'}}
          thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={() => setIsEnabled((previousState) => !previousState)}
          value={isEnabled}></Switch>
      </View>
      <Text style={styles.text}>You slected {state} mode.</Text>
    </SafeAreaView>
  );
};
