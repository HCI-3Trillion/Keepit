import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

import { ColorCode } from '../utils/constants';
import { AntDesign } from '@expo/vector-icons';

const ArrowButton = ({ iconName, handler }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={handler}>
      <AntDesign name={iconName} size={20} color="black" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    width: 30,
    height: 30,
    borderRadius: 10,
    borderColor: ColorCode.GRAY1,
    borderWidth: 1,
  },
});

export default ArrowButton;
