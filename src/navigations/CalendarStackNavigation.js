import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import CalendarScreen from '../screens/CalendarScreen';
import StoryDetailScreen from '../screens/StoryDetailScreen';

const CalendarStack = createNativeStackNavigator();

const CalendarStackNavigation = () => {
  return (
    <CalendarStack.Navigator>
      <CalendarStack.Screen name="Calendar" component={CalendarScreen} />
      <CalendarStack.Screen name="StoryDetail" component={StoryDetailScreen} />
    </CalendarStack.Navigator>
  );
};

export default CalendarStackNavigation;
