import React from 'react';
import {ImageBackground, StyleSheet, View} from 'react-native';
import {Margin} from './margin';

const sizes = (gapText: any) => {
  if (Number.isInteger(gapText)) return gapText;

  switch (gapText) {
    case 'small':
      return 10;
    case 'medium':
      return 20;
    case 'big':
      return 30;
  }
};

interface Props {
  height?: number | string;
  width?: number | string;
  gap: number | string;
  children: any;
  justify?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly';
  align?: 'stretch' | 'flex-start' | 'flex-end' | 'center' | 'baseline';
}

export const Stack: React.FC<Props> = ({children, ...props}) => {
  const styles = StyleSheet.create({
    main: {
      height: props.height,
      width: props.width,
      justifyContent: props.justify,
      alignItems: props.align,
    },
  });

  return (
    <View style={styles.main}>
      {children &&
        (Array.isArray(children) ? children : [children]).map(
          (element, index) => {
            return (
              <Margin key={index} top={sizes(props.gap)}>
                {element}
              </Margin>
            );
          },
        )}
    </View>
  );
};
