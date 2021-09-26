import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {Colors} from '../../theme/Colors';
import {Fonts, FontSize} from '../../theme/Fonts';
import {TextView} from '../TextView';

export function TextButton(props: {
  title: string;
  disabled?: boolean;

  onPress: () => void;
}) {
  return (
    <TouchableOpacity style={styles.container} onPress={props.onPress}>
      <TextView text={props.title} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 4,
    paddingVertical: 8,
    paddingHorizontal: 16,
    alignItems: 'center',
    borderColor: Colors.Primary,
    borderWidth: 1,
  },
  title: {
    ...Fonts.Regular(FontSize.SmallText),
    color: Colors.White,
  },
});
