import React from 'react';
import {StyleSheet, Text, TouchableOpacity, ViewStyle} from 'react-native';
import {Colors} from '../../theme/Colors';
import {Fonts} from '../../theme/Fonts';

export function PrimaryButton(props: {
  title: string;
  disabled?: boolean;

  style?: ViewStyle;

  onPress: () => void;
}) {
  return (
    <TouchableOpacity
      style={[styles.container, props.style]}
      disabled={props.disabled}
      onPress={props.onPress}>
      <Text style={styles.title}>{props.title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 4,
    paddingVertical: 8,
    paddingHorizontal: 30,
    backgroundColor: Colors.Primary,
    alignItems: 'center',
  },
  title: {
    ...Fonts.Regular(),
    color: Colors.White,
  },
});
