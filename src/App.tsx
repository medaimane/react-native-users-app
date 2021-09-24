import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet, View} from 'react-native';
import {Provider} from 'react-redux';
import {TextView} from './components/TextView';
import {HomeScreen} from './screens/HomeScreen/HomeScreen';
import store from './store/configureStore';
import {Colors} from './theme/Colors';
import {Fonts, FontSize} from './theme/Fonts';

export const App = () => {
  return (
    <Provider store={store}>
      <StatusBar />
      <SafeAreaView style={styles.wrapper}>
        <View style={styles.container}>
          <HomeScreen />
        </View>
        <TextView
          textStyle={styles.text}
          text={'made with love by medaimane'}
        />
      </SafeAreaView>
    </Provider>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: Colors.Background,
  },
  container: {
    flex: 1,
  },
  text: {
    ...Fonts.Light(FontSize.SmallText),
    alignSelf: 'center',
  },
});
