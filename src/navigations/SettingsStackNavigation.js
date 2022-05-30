import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ColorCustomScreen from '../screens/ColorCustomScreen';
import ColorSelectScreen from '../screens/ColorSelectScreen';

const SettingsStack = createNativeStackNavigator();

const SettingsStackNavigation = () => {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen name="ColorCustom" component={ColorCustomScreen} />
      <SettingsStack.Screen name="ColorSelect" component={ColorSelectScreen} />
    </SettingsStack.Navigator>
  );
};

export default SettingsStackNavigation;
