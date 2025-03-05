import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React, {memo} from 'react';

const PrimaryButton = props => {
  const {
    title = 'Title',
    onPress = () => {},
    btnStyle = {},
    titleStyle = {},
  } = props;

  return (
    <TouchableOpacity style={[styles.button, btnStyle]} onPress={onPress}>
      <Text style={[styles.buttonText, titleStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

export default memo(PrimaryButton);

const styles = StyleSheet.create({
  button: {
    padding: 10,
  },
});
