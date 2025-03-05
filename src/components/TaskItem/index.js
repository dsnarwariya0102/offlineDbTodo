import React, {memo} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import PrimaryButton from '../PrimaryButton';

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

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 15,
    marginVertical: 8,
    marginHorizontal: 16,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4, // For Android shadow
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textContainer: {
    flex: 1,
    paddingRight: 10,
  },
  taskTitle: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#333',
  },
  taskDescription: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
  actions: {
    flexDirection: 'row',
  },
  editButton: {
    marginRight: 10,
    backgroundColor: '#FFC107',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 8,
  },
  deleteButton: {
    backgroundColor: '#DC3545',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default memo(TaskItem);
