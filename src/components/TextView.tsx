import React from 'react';
import {StyleSheet, Text, TextStyle, View, ViewStyle} from 'react-native';
import {Fonts} from '../theme/Fonts';

export function TextView(props: {
  text: string;
  style?: ViewStyle;
  textStyle?: TextStyle;
}) {
  return (
    <View style={props.style}>
      <Text style={[styles.text, props.textStyle]}>{props.text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    ...Fonts.Regular(),
  },
});
