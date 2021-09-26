import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {UserPresentable} from '../screens/HomeScreen/homeSelectors';
import {Colors} from '../theme/Colors';
import {PrimaryButton} from './buttons/PrimaryButton';
import {TextButton} from './buttons/TextButton';
import {UserRow} from './UserRow';
import {UsersListRow} from './UsersListRow';

export function UsersList(props: {
  users: UserPresentable[];

  onSortByName: () => void;
  onSortByAge: () => void;
  onRefrech: () => void;
}) {
  return (
    <FlatList
      data={props.users}
      contentContainerStyle={styles.list}
      ListHeaderComponent={() => (
        <UsersListRow>
          <TextButton title={'Sort by names'} onPress={props.onSortByName} />
          <TextButton title={'Sort by age'} onPress={props.onSortByAge} />
        </UsersListRow>
      )}
      renderItem={({item}) => (
        <UsersListRow>
          <UserRow avatar={item.avatar} name={item.name} age={item.age} />
        </UsersListRow>
      )}
      ItemSeparatorComponent={() => <View style={styles.itemSeparator} />}
      ListFooterComponent={() => (
        <UsersListRow style={styles.footer}>
          <PrimaryButton title={'Refresh'} onPress={props.onRefrech} />
        </UsersListRow>
      )}
    />
  );
}

const styles = StyleSheet.create({
  list: {
    flex: 1,
  },
  itemSeparator: {
    height: 0.5,
    backgroundColor: Colors.PrimarySoft,
  },
  footer: {
    alignSelf: 'flex-end',
  },
});
