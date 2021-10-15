import React, {ReactNode} from 'react';
import {StyleSheet, View, ViewStyle} from 'react-native';

interface Props {
  children: ReactNode;
  style?: ViewStyle;
}

export function ContainerView(props: Props) {
  return <View style={[styles.container, props.style]}>{props.children}</View>;
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
