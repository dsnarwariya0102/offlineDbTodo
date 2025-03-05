import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {memo} from 'react';
import {Header, Scaffold, TaskItem} from '../../components';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {deleteTodo} from '../../reducers/slice/todoSlice';

const TaskList = () => {
  const navigation = useNavigation();
  const todos = useSelector(state => state.todo.todos);
  const dispatch = useDispatch();

  const handleAdd = () => {
    navigation.navigate('CreateTask');
  };

  const handleEdit = task => {
    let editTask = {...task};
    navigation.navigate('CreateTask', {editTask});
  };

  const handleDelete = id => {
    dispatch(deleteTodo(id));
  };

  return (
    <Scaffold>
      <Header addBtn={true} onAdd={handleAdd} />
      <View>
        <FlatList
          data={todos}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <TaskItem todo={item} onEdit={handleEdit} onDelete={handleDelete} />
          )}
        />
      </View>
    </Scaffold>
  );
};

export default memo(TaskList);
