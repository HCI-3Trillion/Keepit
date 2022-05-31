import React, { useContext } from 'react';
import { StyleSheet, Text, TouchableOpacity, Dimensions } from 'react-native';

import ColorContext from '../stores/ColorContext';
import { ColorCode } from '../utils/constants';

const DayBox = ({ emotion, text, handler }) => {
  const { colors } = useContext(ColorContext);

  return (
    <TouchableOpacity
      style={styles(text == 0 ? 'transparent' : ColorCode[colors[emotion]]).container}
      onPress={handler}
    >
      <Text style={tstyles(emotion ? 'white' : 'black')}>{text == 0 ? '' : text}</Text>
    </TouchableOpacity>
  );
};

const styles = (color) =>
  StyleSheet.create({
    container: {
      width: Dimensions.get('window').width * 0.11,
      margin: Dimensions.get('window').width * 0.01,
      aspectRatio: 1,
      backgroundColor: color,
      borderRadius: 15,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });

const tstyles = (color) =>
  StyleSheet.create({
    color: color,
  });

export default DayBox;
