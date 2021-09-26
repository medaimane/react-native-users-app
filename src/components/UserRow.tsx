import React from 'react';
import {StyleSheet} from 'react-native';
import {Colors} from '../theme/Colors';
import {Fonts, FontSize} from '../theme/Fonts';
import {TextView} from './TextView';

export function UserRow(props: {avatar: string; name: string; age: string}) {
  return (
    <>
      <TextView
        style={styles.avatar}
        textStyle={styles.avatarText}
        text={props.avatar}
      />
      <TextView
        style={styles.name}
        textStyle={styles.nameText}
        text={props.name}
      />
      <TextView
        style={styles.age}
        textStyle={styles.ageText}
        text={props.age}
      />
    </>
  );
}

const styles = StyleSheet.create({
  avatar: {
    height: 40,
    width: 40,
    borderRadius: 20,
    backgroundColor: Colors.Secondary,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
    marginLeft: 4,
  },
  avatarText: {
    color: Colors.White,
  },
  name: {
    flexGrow: 1,
  },
  nameText: {
    ...Fonts.SemiBold(FontSize.Header3),
    color: Colors.Primary,
  },
  age: {
    paddingLeft: 16,
  },
  ageText: {
    ...Fonts.SemiBold(),
    color: Colors.Primary,
  },
});
