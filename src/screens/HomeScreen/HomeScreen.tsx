import React, {useCallback, useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {RemoteData} from '../../components/RemoteData';
import {TextView} from '../../components/TextView';
import {UsersList} from '../../components/UsersList';
import {Local} from '../../localization/local';
import {RootState} from '../../store/rootState';
import {HomeViewActions} from './HomeActions';
import {getViewState, HomeViewState} from './homeSelectors';

export function HomeScreen() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(HomeViewActions.start());
  }, [dispatch]);

  const {usersPresentable, viewState} = useSelector<RootState, HomeViewState>(
    state => getViewState(state.home),
  );

  const handleSortingByName = useCallback(() => {
    dispatch(HomeViewActions.sortByNameAsc());
  }, [dispatch]);

  const handleSortingByAge = useCallback(() => {
    dispatch(HomeViewActions.sortByAgeAsc());
  }, [dispatch]);

  const handleRefresh = useCallback(() => {
    dispatch(HomeViewActions.refresh());
  }, [dispatch]);

  return (
    <View style={styles.container}>
      <TextView
        style={styles.logo}
        textStyle={styles.logoText}
        text={Local.appLogo}
      />

      <RemoteData
        viewState={viewState}
        renderData={() => (
          <UsersList
            users={usersPresentable}
            onSortByName={handleSortingByName}
            onSortByAge={handleSortingByAge}
            onRefrech={handleRefresh}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
  },
  logo: {
    paddingVertical: 20,
  },
  logoText: {
    fontSize: 36,
  },
});
