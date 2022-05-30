import React from 'react';
import { StyleSheet, TouchableOpacity, Dimensions, Image } from 'react-native';

import { ColorCode } from '../utils/constants';
import stories from '../stores/stories';

const ImageBox = ({ id }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={() => {}}>
      <Image source={stories[id - 1].imgLink} style={styles.image} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: ColorCode.GRAY,
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
  image: {
    flex: 1,
    aspectRatio: 1,
  },
});

export default ImageBox;
