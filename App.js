import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Provider } from 'react-redux';
import Navigator from './views/Navigator';
import store from './ducks/store';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

const App = () =>
  <Provider store={store}>
    <View style={styles.container}>
      <Navigator />
    </View>
  </Provider>;

export default App;
