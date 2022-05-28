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
    flex: 1,
    backgroundColor: ColorCode.PRIMARY,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: 'white',
  },
});

export default BasicButton;
