import React, {createRef, useState} from 'react';
import {FlatList, StyleSheet, TouchableOpacity, View} from 'react-native';
import {Local} from '../localization/local';
import {UserPresentable} from '../screens/HomeScreen/homeSelectors';
import {Colors} from '../theme/Colors';
import {TextButton} from './buttons/TextButton';
import {UserRow} from './UserRow';
import {ContainerView} from './ContainerView';
import {ArrowUpIcon} from '../svg/svg';

interface Props {
  users: UserPresentable[];

  onSortByName: () => void;
  onSortByAge: () => void;
}

export function UsersList(props: Props) {
  const list = createRef<FlatList>();

  const [hasFooter, setHasFooter] = useState(false);

  const handleScrollToTop = () => {
    list.current?.scrollToOffset({offset: 0, animated: true});
  };

  const handleEndReached = () => {
    setHasFooter(true);
  };

  return (
    <FlatList
      ref={list}
      data={props.users}
      initialNumToRender={10}
      onEndReached={handleEndReached}
      onEndReachedThreshold={0}
      showsVerticalScrollIndicator={false}
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
      keyExtractor={(item, idx) => `User_${item.name}_${item.age}_${idx}`}
      ItemSeparatorComponent={() => <View style={styles.itemSeparator} />}
      ListFooterComponent={() =>
        hasFooter ? (
          <TouchableOpacity onPress={handleScrollToTop}>
            <ContainerView style={styles.footer}>
              <ArrowUpIcon fill={Colors.Primary} />
            </ContainerView>
          </TouchableOpacity>
        ) : null
      }
    />
  );
}

const styles = StyleSheet.create({
  list: {
    flexGrow: 1,
    paddingBottom: 16,
  },
  itemSeparator: {
    height: 0.5,
    backgroundColor: Colors.PrimarySoft,
  },
  footer: {
    width: 36,
    height: 36,
    borderRadius: 18,
    marginRight: 8,
    alignSelf: 'flex-end',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.PrimarySoft,
  },
});
