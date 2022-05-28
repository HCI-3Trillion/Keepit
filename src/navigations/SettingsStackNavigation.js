import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SettingsScreen from '../screens/SettingsScreen';

const SettingsStack = createNativeStackNavigator();

const SettingsStackNavigation = () => {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen name="Settings" component={SettingsScreen} />
    </SettingsStack.Navigator>
  );
};

export default SettingsStackNavigation;
