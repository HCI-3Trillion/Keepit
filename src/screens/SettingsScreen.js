import React from 'react';
import { Text, View } from 'react-native';
import { ColorCode } from '../utils/constants';

import Love from '../emotions/Love';

const SettingsScreen = () => {
  return (
    <View>
      <Text>settings</Text>
      <Love width={120} height={40} color={ColorCode.PINK} />
    </View>
  );
};

export default SettingsScreen;
