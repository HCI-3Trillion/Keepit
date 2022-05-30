import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { ColorCode } from '../utils/constants';

const ColorCircle = ({ isSelected, color, handler }) => {
  return <TouchableOpacity style={styles(isSelected, color).container} onPress={handler} />;
};

const styles = (isSelected, color) =>
  StyleSheet.create({
    container: {
      width: 60,
      height: 60,
      margin: 5,
      backgroundColor: ColorCode[color],
      borderRadius: 50,
      borderWidth: 5,
      borderColor: isSelected ? ColorCode.PRIMARY : 'transparent',
    },
  });

export default ColorCircle;
