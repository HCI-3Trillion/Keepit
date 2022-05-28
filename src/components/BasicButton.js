import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';

import { ColorCode } from '../utils/constants';

const BasicButton = ({ title, handler }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={handler}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: ColorCode.PRIMARY,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
    margin: 10,
    borderRadius: 100,
  },
  title: {
    color: 'white',
    fontSize: 20,
  },
});

export default BasicButton;
