import React from 'react';
import { StyleSheet, TouchableOpacity, Dimensions, Text } from 'react-native';

import { ColorCode } from '../utils/constants';

const ImageBox = ({ title, handler }) => {
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
    width: Dimensions.get('window').width * 0.33,
    aspectRatio: 1,
    margin: 1,
  },
  title: {
    color: 'white',
    fontSize: 20,
  },
});

export default ImageBox;
