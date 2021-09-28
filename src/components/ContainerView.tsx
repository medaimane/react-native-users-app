import React, {ReactNode} from 'react';
import {StyleSheet, View, ViewStyle} from 'react-native';

export function ContainerView(props: {
  children?: ReactNode;
  style?: ViewStyle;
}) {
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
