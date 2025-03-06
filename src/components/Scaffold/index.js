import {
  StyleSheet,
  View,
  SafeAreaView,
  StatusBar,
  useColorScheme,
} from 'react-native';
import React, {memo} from 'react';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const Scaffold = props => {
  const {containerStyle = {}, statusBackGroundColor = 'transparent'} = props;
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundColor = isDarkMode ? Colors.darker : Colors.lighter;

  return (
    <View style={[styles.container, {backgroundColor}]}>
      {/* Transparent StatusBar to show content behind */}
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={statusBackGroundColor}
        translucent={true}
      />

      {/* SafeAreaView to push content after StatusBar */}
      <SafeAreaView style={[styles.content, containerStyle]}>
        {props?.children}
      </SafeAreaView>
    </View>
  );
};

export default memo(Scaffold);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    paddingTop: StatusBar.currentHeight || 0, // Ensure padding on Android
  },
});
