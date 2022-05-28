import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import CalendarScreen from '../screens/CalendarScreen';

const CalendarStack = createNativeStackNavigator();

const CalendarStackNavigation = () => {
  return (
    <CalendarStack.Navigator>
      <CalendarStack.Screen name="Calendar" component={CalendarScreen} />
    </CalendarStack.Navigator>
  );
};

export default CalendarStackNavigation;
