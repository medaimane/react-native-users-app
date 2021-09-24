import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {UserPresentable} from '../screens/HomeScreen/homeSelectors';
import {Colors} from '../theme/Colors';
import {TextView} from './TextView';
import {UsersListRow} from './UsersListRow';

export function UsersList(props: {users: UserPresentable[]}) {
  return (
    <FlatList
      data={props.users}
      contentContainerStyle={styles.list}
      ListHeaderComponent={() => (
        <TextView style={styles.listHeader} text={'Header'} />
      )}
      renderItem={({item}) => (
        <UsersListRow avatar={item.avatar} name={item.name} age={item.age} />
      )}
      ItemSeparatorComponent={() => <View style={styles.itemSeparator} />}
      ListFooterComponent={() => (
        <TextView style={styles.listFooter} text={'Footer'} />
      )}
    />
  );
}

const styles = StyleSheet.create({
  list: {
    flex: 1,
    paddingTop: 16,
    paddingBottom: 24,
  },
  listHeader: {},
  listFooter: {},
  itemSeparator: {
    height: 1,
    backgroundColor: Colors.PrimaryLight,
  },
});
