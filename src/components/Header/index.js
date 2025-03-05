import {StyleSheet, Text, View} from 'react-native';
import React, {memo} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import AppButton from '../AppButton';

const Header = ({
  onBackPress,
  onAdd,
  backButton,
  addBtn,
  title = 'Offline App',
}) => {
  return (
    <LinearGradient colors={['#007BFF', '#0056b3']} style={styles.headerBar}>
      {/* Back Button */}
      {backButton ? (
        <AppButton
          title="←"
          onPress={onBackPress}
          style={styles.iconButton}
          textStyle={styles.iconText}
        />
      ) : (
        <View style={styles.spacer} />
      )}

      {/* Title */}
      <Text style={styles.title}>{title}</Text>

      {/* Add Button */}
      {addBtn ? (
        <AppButton title="+ Add" onPress={onAdd} />
      ) : (
        <View style={styles.spacer} />
      )}
    </LinearGradient>
  );
};

export default memo(Header);

const styles = StyleSheet.create({
  headerBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 20,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.2,
    shadowRadius: 5,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  iconButton: {
    backgroundColor: 'transparent',
  },
  iconText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#fff',
  },
  spacer: {
    width: 50, // Keeps spacing consistent
  },
});
