import React from 'react';
import {StyleSheet, View} from 'react-native';

interface Props {
  top?: number;
  bottom?: number;
  left?: number;
  right?: number;
  topBottom?: number;
  leftRight?: number;
  every?: number;
}

export const Padding: React.FC<Props> = ({children, ...props}) => {
  const styles = StyleSheet.create({
    paddings: {
      padding: props.every,
      paddingHorizontal: props.leftRight,
      paddingVertical: props.topBottom,
      paddingRight: props.right,
      paddingLeft: props.left,
      paddingBottom: props.bottom,
      paddingTop: props.top,
    },
  });
  return <View style={[styles.paddings]}>{children}</View>;
};
