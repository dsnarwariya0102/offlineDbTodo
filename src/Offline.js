import {StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import AppStack from './navigation/AppStack';
import {memo} from 'react';

const Offline = () => {
  return (
    <NavigationContainer>
      <AppStack />
    </NavigationContainer>
  );
};

export default memo(Offline);
