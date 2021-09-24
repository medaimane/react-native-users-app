import React, {useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {RemoteData} from '../../components/RemoteData';
import {TextView} from '../../components/TextView';
import {UsersList} from '../../components/UsersList';
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

  return (
    <View style={styles.container}>
      <TextView style={styles.logo} textStyle={styles.logoText} text={'LOGO'} />

      <RemoteData
        viewState={viewState}
        renderData={() => <UsersList users={usersPresentable} />}
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
