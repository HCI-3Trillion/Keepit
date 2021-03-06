import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from '../screens/HomeScreen';
import CameraScreen from '../screens/CameraScreen';
import EditScreen from '../screens/EditScreen';
import EmotionSelectScreen from '../screens/EmotionSelectScreen';
import StoryDetailScreen from '../screens/StoryDetailScreen';

const HomeStack = createNativeStackNavigator();

const HomeStackNavigation = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={HomeScreen} />
      <HomeStack.Screen name="Camera" component={CameraScreen} />
      <HomeStack.Screen name="Edit" component={EditScreen} />
      <HomeStack.Screen name="EmotionSelect" component={EmotionSelectScreen} />
      <HomeStack.Screen name="StoryDetail" component={StoryDetailScreen} />
    </HomeStack.Navigator>
  );
};

export default HomeStackNavigation;
