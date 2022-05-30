import React from 'react';
import { StyleSheet, TextInput, View, Image, Text } from 'react-native';

import Emotion from '../components/Emotion';
import stories from '../stores/stories';
import { ColorCode } from '../utils/constants';

const StoryDetailScreen = () => {
  return (
    <View>
      <View style={styles.emotionContainer}>
        <Emotion emotion={stories[0].emotion} />
      </View>
      <View style={styles.imageWrapper}>
        <Image source={stories[0].imgLink} style={styles.image} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>{stories[0].comment}</Text>
        <Text style={styles.date}>{stories[0].date}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  emotionContainer: {
    alignItems: 'center',
    margin: 15,
  },
  imageWrapper: {
    flexDirection: 'row',
    paddingLeft: 10,
    paddingRight: 10,
  },
  image: {
    flex: 1,
    aspectRatio: 1,
    borderRadius: 10,
  },
  textContainer: {
    padding: 20,
  },
  input: {
    padding: 10,
    fontWeight: 'bold',
    color: 'black',
  },
  text: {
    paddingBottom: 10,
  },
  date: {
    color: ColorCode.GRAY1,
  },
});

export default StoryDetailScreen;
