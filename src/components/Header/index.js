import {StyleSheet, Text, View} from 'react-native';
import React, {memo} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import PrimaryButton from '../PrimaryButton';

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
        <PrimaryButton
          title={'←'}
          onPress={onBackPress}
          titleStyle={styles.title}
          btnStyle={styles.iconButton}
        />
      ) : (
        <View style={styles.spacer} />
      )}

      {/* Title */}
      <Text style={styles.title}>{title}</Text>

      {/* Add Button */}
      {addBtn ? (
        <PrimaryButton
          title={'+ Add'}
          onPress={onAdd}
          titleStyle={styles.addTitle}
          btnStyle={styles.button}
        />
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
  addTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#fff',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 20,
    backgroundColor: '#007BFF',
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#fff',
  },
  iconButton: {
    backgroundColor: 'transparent',
    paddingVertical: 0,
    paddingHorizontal: 0,
    borderRadius: 0,
  },
  spacer: {
    width: 50, // Keeps spacing consistent
  },
});
