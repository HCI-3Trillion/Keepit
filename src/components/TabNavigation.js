import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';

import BoardScreen from '../screens/BoardScreen';
import CalendarScreen from '../screens/CalendarScreen';
import SettingsScreen from '../screens/SettingsScreen';
import HomeStackNavigation from './HomeStackNavigation';

import { ColorCode } from '../utils/constants';

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;

            if (route.name === 'HomeNavi') {
              iconName = 'home';
            } else if (route.name === 'Board') {
              iconName = 'th-large';
            } else if (route.name === 'Calendar') {
              iconName = 'calendar-o';
            } else if (route.name === 'Settings') {
              iconName = 'gear';
            }

            return <FontAwesome name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: ColorCode.PRIMARY,
          tabBarInactiveTintColor: ColorCode.GRAY1,
          tabBarStyle: {
            height: 60,
          },
          headerShown: false,
        })}
      >
        <Tab.Screen name="HomeNavi" component={HomeStackNavigation} />
        <Tab.Screen name="Board" component={BoardScreen} />
        <Tab.Screen name="Calendar" component={CalendarScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default TabNavigation;
