import React, {ReactNode} from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';
import {Local} from '../localization/local';
import {ViewState} from '../store/ViewState';
import {TextView} from './TextView';

export function RemoteData(props: {
  viewState: ViewState;
  renderData: () => ReactNode;
}) {
  const content = () => {
    switch (props.viewState) {
      case ViewState.Data: {
        return props.renderData();
      }

      case ViewState.Empty: {
        return <TextView text={Local.noDataFound} />;
      }

      case ViewState.Error: {
        return <TextView text={Local.somethingWentWrong} />;
      }

      case ViewState.Loading: {
        return (
          <View style={styles.loading}>
            <ActivityIndicator size={'large'} />
          </View>
        );
      }
    }
  };

  return <View style={styles.container}>{content()}</View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loading: {
    flex: 1,
    paddingTop: 16,
    alignItems: 'center',
  },
});
