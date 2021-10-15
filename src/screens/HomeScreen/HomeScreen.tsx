import React, {useCallback, useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators, Dispatch} from 'redux';
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
import {getViewState} from './homeSelectors';
import {returntypeof} from 'react-redux-typescript';

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(HomeViewActions, dispatch);

const mapStateToProps = (state: RootState) => getViewState(state.home);

const stateProps = returntypeof(mapStateToProps);
const dispatchProps = returntypeof(mapDispatchToProps);

type Props = typeof dispatchProps & typeof stateProps;

function Home(props: Props) {
  useEffect(() => {
    props.start();
  }, [props]);

  const handleSortingByName = useCallback(() => {
    props.sortByNameAsc();
  }, [props]);

  const handleSortingByAge = useCallback(() => {
    props.sortByAgeAsc();
  }, [props]);

  const handleRefresh = useCallback(() => {
    props.refresh();
  }, [props]);

  return (
    <View style={styles.container}>
      <ContainerView style={styles.logo}>
        <PeopleIconSVG fill={Colors.PrimaryLight} width={36} height={36} />
        <TextView text={Local.appLogo} textStyle={styles.logoText} />
      </ContainerView>

      <ContainerView style={styles.buttonRow}>
        <PrimaryButton title={Local.refresh} onPress={handleRefresh} />
      </ContainerView>

      <RemoteData
        viewState={props.viewState}
        renderData={() => (
          <UsersList
            users={props.usersPresentable}
            onSortByName={handleSortingByName}
            onSortByAge={handleSortingByAge}
          />
        )}
      />
    </View>
  );
}

export const HomeScreen = connect(mapStateToProps, mapDispatchToProps)(Home);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
  },
  logo: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoText: {
    fontSize: 28,
  },
  buttonRow: {
    alignSelf: 'flex-end',
  },
});
