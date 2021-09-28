import React, {useCallback, useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {PrimaryButton} from '../../components/buttons/PrimaryButton';
import {ContainerView} from '../../components/ContainerView';
import {RemoteData} from '../../components/RemoteData';
import {TextView} from '../../components/TextView';
import {UsersList} from '../../components/UsersList';
import {Local} from '../../localization/local';
import {RootState} from '../../store/rootState';
import {PeopleIconSVG} from '../../svg/svg';
import {Colors} from '../../theme/Colors';
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
      <ContainerView style={styles.logo}>
        <PeopleIconSVG fill={Colors.PrimaryLight} width={64} height={64} />
        <TextView text={Local.appLogo} textStyle={styles.logoText} />
      </ContainerView>

      <ContainerView style={styles.buttonRow}>
        <PrimaryButton title={Local.refresh} onPress={handleRefresh} />
      </ContainerView>

      <RemoteData
        viewState={viewState}
        renderData={() => (
          <UsersList
            users={usersPresentable}
            onSortByName={handleSortingByName}
            onSortByAge={handleSortingByAge}
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
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoText: {
    fontSize: 36,
  },
  buttonRow: {
    alignSelf: 'flex-end',
  },
});
