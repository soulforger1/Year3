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
  height?: number | string;
  width?: number | string;
  justify?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly';
  align?: 'stretch' | 'flex-start' | 'flex-end' | 'center' | 'baseline';
}

export const Margin: React.FC<Props> = ({children, ...props}) => {
  const styles = StyleSheet.create({
    margins: {
      margin: props.every,
      marginHorizontal: props.leftRight,
      marginVertical: props.topBottom,
      marginRight: props.right,
      marginLeft: props.left,
      marginBottom: props.bottom,
      marginTop: props.top,
      height: props.height,
      width: props.width,
      justifyContent: props.justify,
      alignItems: props.align,
    },
  });
  return <View style={[styles.margins]}>{children}</View>;
};
