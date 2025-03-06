import React, {memo} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import PrimaryButton from '../PrimaryButton';
import {styles} from './indexCss';

const TaskItem = ({todo, onEdit, onDelete}) => {
  return (
    <View style={styles.card}>
      <View style={styles.textContainer}>
        <Text style={styles.taskTitle}>{todo.title}</Text>
        <Text style={styles.taskDescription}>{todo.description}</Text>
      </View>
      <View style={styles.actions}>
        <PrimaryButton
          titleStyle={styles.buttonText}
          btnStyle={styles.editButton}
          title={'✏️ Edit'}
          onPress={() => onEdit(todo)}
        />
        <PrimaryButton
          titleStyle={styles.buttonText}
          btnStyle={styles.deleteButton}
          title={'🗑 Delete'}
          onPress={() => onDelete(todo.id)}
        />
      </View>
    </View>
  );
};

export default memo(TaskItem);
