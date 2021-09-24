import React, {ReactNode} from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';
import {ViewState} from '../services/view/ViewState';
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
        return <TextView text={'No data found!'} />;
      }

      case ViewState.Error: {
        return <TextView text={'Oops! Something went wrong.'} />;
      }

      case ViewState.Loading: {
        return <ActivityIndicator size={'large'} />;
      }
    }
  };

  return <View style={styles.container}>{content()}</View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
