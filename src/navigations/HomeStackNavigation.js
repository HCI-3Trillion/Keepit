import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from '../screens/HomeScreen';
import CameraScreen from '../screens/CameraScreen';
import EditScreen from '../screens/EditScreen';

const HomeStack = createNativeStackNavigator();

const HomeStackNavigation = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={HomeScreen} />
      <HomeStack.Screen name="Camera" component={CameraScreen} />
      <HomeStack.Screen name="Edit" component={EditScreen} />
    </HomeStack.Navigator>
  );
};

export default HomeStackNavigation;
