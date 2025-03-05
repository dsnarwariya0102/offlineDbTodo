import {StyleSheet, TextInput, View} from 'react-native';
import React from 'react';

const InputField = ({
  placeholder,
  value,
  onChangeText,
  multiline = false,
  numberOfLines = 1,
  ...rest // Allows additional props like keyboardType, secureTextEntry, etc.
}) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={[styles.input, multiline && styles.textArea]}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        multiline={multiline}
        numberOfLines={numberOfLines}
        textAlignVertical={multiline ? 'top' : 'center'}
        {...rest} // Spreads additional TextInputProps
      />
    </View>
  );
};

export default InputField;

const styles = StyleSheet.create({
  container: {
    marginBottom: 15,
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
  },
  textArea: {
    height: 120,
  },
});
