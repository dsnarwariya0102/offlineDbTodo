import {StyleSheet, Text, View, TouchableOpacity, Alert} from 'react-native';
import React, {memo, useState} from 'react';
import {InputField, Scaffold} from '../../components';
import Header from '../../components/Header';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {addTodo, updateTodo} from '../../reducers/slice/todoSlice';
import {styles} from './indexCss';

const CreateTask = props => {
  const {editTask} = props?.route?.params || {};

  const navigation = useNavigation();
  const dispatch = useDispatch();

  const [title, setTitle] = useState(editTask?.title || '');
  const [description, setDescription] = useState(editTask?.description || '');
  const [errors, setErrors] = useState({title: '', description: ''});

  const validateInputs = () => {
    let isValid = true;
    let newErrors = {title: '', description: ''};

    if (!title.trim()) {
      newErrors.title = 'Title is required';
      isValid = false;
    }
    if (!description.trim()) {
      newErrors.description = 'Description is required';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleAddOrUpdate = () => {
    if (!validateInputs()) return;

    if (editTask?.id) {
      dispatch(updateTodo({id: editTask.id, title, description}));
    } else {
      dispatch(addTodo({title, description}));
    }

    clear();
    onBackPress();
  };

  const clear = () => {
    setTitle('');
    setDescription('');
    setErrors({title: '', description: ''});
  };

  const onBackPress = () => {
    navigation.goBack();
  };

  return (
    <Scaffold>
      <Header backButton={true} onBackPress={onBackPress} />
      <View style={styles.container}>
        {/* Title Input */}
        <InputField
          placeholder="Enter title"
          value={title}
          onChangeText={setTitle}
          style={[styles.input, errors.title ? styles.errorBorder : null]}
        />
        {errors.title ? (
          <Text style={styles.errorText}>{errors.title}</Text>
        ) : null}

        {/* Description Input */}
        <InputField
          placeholder="Enter description"
          value={description}
          onChangeText={setDescription}
          multiline
          numberOfLines={5}
          style={[
            styles.textArea,
            errors.description ? styles.errorBorder : null,
          ]}
        />
        {errors.description ? (
          <Text style={styles.errorText}>{errors.description}</Text>
        ) : null}

        {/* Add Button */}
        <TouchableOpacity style={styles.button} onPress={handleAddOrUpdate}>
          <Text style={styles.buttonText}>
            {editTask?.id ? 'Update Task' : 'Add Task'}
          </Text>
        </TouchableOpacity>
      </View>
    </Scaffold>
  );
};

export default memo(CreateTask);
