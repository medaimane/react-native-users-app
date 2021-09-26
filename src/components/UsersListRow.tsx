import React, {ReactNode} from 'react';
import {StyleSheet, View, ViewStyle} from 'react-native';
import {Styles} from '../theme/Styles';

export function UsersListRow(props: {children?: ReactNode; style?: ViewStyle}) {
  return <View style={[styles.container, props.style]}>{props.children}</View>;
}

const styles = StyleSheet.create({
  container: {
    ...Styles.Shadow(),
    paddingVertical: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
