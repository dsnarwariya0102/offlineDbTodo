import {memo} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {CreateTask, TaskList} from '../screens';

const Stack = createNativeStackNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="TaskList" component={TaskList} />
      <Stack.Screen
        name="CreateTask"
        component={CreateTask}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default memo(AppStack);
