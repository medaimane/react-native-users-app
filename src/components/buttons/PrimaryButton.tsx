import React from 'react';
import {StyleSheet, Text, TouchableOpacity, ViewStyle} from 'react-native';
import {Colors} from '../../theme/Colors';
import {Fonts, FontSize} from '../../theme/Fonts';

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
    flex: 1,
    borderRadius: 4,
    paddingVertical: 8,
    marginHorizontal: 8,
    paddingHorizontal: 16,
    alignItems: 'center',
    backgroundColor: Colors.Primary,
  },
  title: {
    ...Fonts.Regular(FontSize.Header3),
    color: Colors.White,
  },
});
