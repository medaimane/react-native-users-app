import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Colors} from '../theme/Colors';
import {Fonts, FontSize} from '../theme/Fonts';
import {Styles} from '../theme/Styles';
import {TextView} from './TextView';

export function UsersListRow(props: {
  avatar: string;
  name: string;
  age: string;
}) {
  return (
    <View style={styles.container}>
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    ...Styles.Shadow(),
    paddingVertical: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
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
