import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Provider } from 'react-redux';
import Navigator from './views/Navigator';
import configureStore from './ducks/store';

const store = configureStore();

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const App = () =>
  <Provider store={store}>
    <View style={styles.container}>
      <Navigator />
    </View>
  </Provider>;

export default App;
