import realm, {Todo} from './realmConfig';

// ✅ Convert Realm objects to plain JavaScript objects
const convertToPlainObjects = tasks => {
  return tasks.map(task => ({
    id: task.id,
    title: task.title,
    description: task.description,
  }));
};

// 🔹 Fetch All Tasks
export const getAllTasksFromRealm = () => {
  const tasks = realm.objects('Todo');
  return convertToPlainObjects(tasks);
};

// Add Task
export const addTaskToRealm = task => {
  realm.write(() => {
    realm.create('Todo', {
      id: Date.now(), // Unique ID
      title: task.title,
      description: task.description,
    });
  });
  return getAllTasksFromRealm(); // Return updated list
};

// Update Task
export const updateTaskInRealm = task => {
  realm.write(() => {
    let existingTask = realm.objectForPrimaryKey('Todo', task.id);
    if (existingTask) {
      existingTask.title = task.title;
      existingTask.description = task.description;
    }
  });
  return getAllTasksFromRealm();
};

// Delete Task
export const deleteTaskFromRealm = id => {
  realm.write(() => {
    let task = realm.objectForPrimaryKey('Todo', id);
    if (task) {
      realm.delete(task);
    }
  });
  return getAllTasksFromRealm();
};
