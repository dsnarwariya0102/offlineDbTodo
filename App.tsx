/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {StyleSheet, View} from 'react-native';
import Offline from './src/Offline';
import {store} from './src/reducers/store';
import {Provider} from 'react-redux';

function App(): React.JSX.Element {
  return (
    <View style={{flex: 1}}>
      <Provider store={store}>
        <Offline />
      </Provider>
    </View>
  );
}

export default App;
