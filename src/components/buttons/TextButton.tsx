import React from 'react';
import {TouchableOpacity} from 'react-native';
import {TextView} from '../TextView';

export function TextButton(props: {
  title: string;
  disabled?: boolean;

  onPress: () => void;
}) {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <TextView text={props.title} />
    </TouchableOpacity>
  );
}
