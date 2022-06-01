import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';

import HomeStackNavigation from './HomeStackNavigation';
import BoardStackNavigation from './BoardStackNavigation';
import CalendarStackNavigation from './CalendarStackNavigation';
import SettingsStackNavigation from './SettingsStackNavigation';

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
            } else if (route.name === 'BoardNavi') {
              iconName = 'th-large';
            } else if (route.name === 'CalendarNavi') {
              iconName = 'calendar-o';
            } else if (route.name === 'SettingsNavi') {
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
          tabBarShowLabel: false,
          tabBarHideOnKeyboard: true,
        })}
      >
        <Tab.Screen name="HomeNavi" component={HomeStackNavigation} />
        <Tab.Screen name="BoardNavi" component={BoardStackNavigation} />
        <Tab.Screen name="CalendarNavi" component={CalendarStackNavigation} />
        <Tab.Screen name="SettingsNavi" component={SettingsStackNavigation} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default TabNavigation;
