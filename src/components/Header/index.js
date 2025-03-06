import {StyleSheet, Text, View} from 'react-native';
import React, {memo} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import PrimaryButton from '../PrimaryButton';
import {styles} from './indexCss';

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
