import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import BoardScreen from '../screens/BoardScreen';
import StoryDetailScreen from '../screens/StoryDetailScreen';

const BoardStack = createNativeStackNavigator();

const BoardStackNavigation = () => {
  return (
    <BoardStack.Navigator>
      <BoardStack.Screen name="Board" component={BoardScreen} />
      <BoardStack.Screen name="StoryDetail" component={StoryDetailScreen} />
    </BoardStack.Navigator>
  );
};

export default BoardStackNavigation;
