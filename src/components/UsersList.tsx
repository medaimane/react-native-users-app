import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {Local} from '../localization/local';
import {UserPresentable} from '../screens/HomeScreen/homeSelectors';
import {Colors} from '../theme/Colors';
import {TextButton} from './buttons/TextButton';
import {UserRow} from './UserRow';
import {ContainerView} from './ContainerView';

export function UsersList(props: {
  users: UserPresentable[];

  onSortByName: () => void;
  onSortByAge: () => void;
}) {
  return (
    <FlatList
      data={props.users}
      contentContainerStyle={styles.list}
      ListHeaderComponent={() => (
        <ContainerView>
          <TextButton title={Local.sortByName} onPress={props.onSortByName} />
          <TextButton title={Local.sortByAge} onPress={props.onSortByAge} />
        </ContainerView>
      )}
      renderItem={({item}) => (
        <ContainerView>
          <UserRow avatar={item.avatar} name={item.name} age={item.age} />
        </ContainerView>
      )}
      ItemSeparatorComponent={() => <View style={styles.itemSeparator} />}
    />
  );
}

const styles = StyleSheet.create({
  list: {
    flexGrow: 1,
  },
  itemSeparator: {
    height: 0.5,
    backgroundColor: Colors.PrimarySoft,
  },
});
