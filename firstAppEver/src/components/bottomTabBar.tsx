import React, {useEffect, useRef} from 'react';
import {Dimensions, Pressable, StyleSheet, View, Animated} from 'react-native';
import {Chat, Profile, Settings, News, Calendar} from '../assets/icon';
const {width} = Dimensions.get('window');

interface Props {
  state?: any;
  descriptors?: any;
  navigation?: any;
}

const IconSelecter: any = {
  Chat: Chat,
  Calendar: Calendar,
  News: News,
  Profile: Profile,
  Settings: Settings,
};

export const BottomTabBar: React.FC<Props> = ({
  state,
  descriptors,
  navigation,
}) => {
  const animatedValue = useRef(new Animated.Value(0)).current;
  const time = 300;

  const scale = animatedValue.interpolate({
    inputRange: [0, 1, 2],
    outputRange: [1, 0.8, 1.1],
  });
  const translateY = animatedValue.interpolate({
    inputRange: [0, 1, 2],
    outputRange: [0, 0, -18],
  });

  return (
    <View style={styles.main}>
      {state.routes.map((route: any, index: any) => {
        const {options} = descriptors[route.key];
        const Icon = IconSelecter[route.name];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        useEffect(() => {
          Animated.spring(animatedValue, {
            toValue: 1,
            friction: 9,
            useNativeDriver: true,
          }).start(() => {
            Animated.spring(animatedValue, {
              toValue: 2,
              friction: 3,
              useNativeDriver: true,
            }).start();
          });
        }, [isFocused]);

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        return (
          <Pressable style={styles.button} key={route.name} onPress={onPress}>
            <Animated.View
              style={[
                styles.bigCircle,
                isFocused ? {transform: [{translateY}]} : {},
              ]}>
              <Animated.View
                style={[
                  styles.littleCircle,
                  isFocused ? {transform: [{scale}]} : {},
                  {
                    backgroundColor: isFocused
                      ? 'rgb(76, 83, 221)'
                      : 'rgb(255, 255, 255)',
                  },
                ]}>
                <Icon
                  width={24}
                  height={24}
                  color={isFocused ? 'rgb(255, 255, 255)' : 'rgb(76, 83, 221)'}
                />
              </Animated.View>
            </Animated.View>
            <Animated.Text
              style={[
                styles.text,
                {display: isFocused ? 'flex' : 'none'},
                isFocused ? {transform: [{translateY}]} : {},
              ]}>
              {route.name}
            </Animated.Text>
          </Pressable>
          //   <TouchableOpacity
          //     accessibilityRole="button"
          //     accessibilityState={isFocused ? {selected: true} : {}}
          //     accessibilityLabel={options.tabBarAccessibilityLabel}
          //     testID={options.tabBarTestID}
          //     onPress={onPress}
          //     onLongPress={onLongPress}
          //     style={{flex: 1}}>
          //     <Text style={{color: isFocused ? '#673ab7' : '#222'}}>{label}</Text>
          //   </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    height: 90,
    width: width,
    flexDirection: 'row',
  },
  button: {
    width: width * 0.2,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
  },
  bigCircle: {
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgb(255,255,255)',
  },
  littleCircle: {
    height: 40,
    width: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 14,
    color: 'rgb(76, 83, 221)',
  },
});
