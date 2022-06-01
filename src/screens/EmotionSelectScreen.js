import React, { useState, useContext } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Alert } from 'react-native';
import StoryContext from '../stores/StoryContext';

import BasicButton from '../components/BasicButton';
import Emotion from '../components/Emotion';
import { ColorCode } from '../utils/constants';

const EmotionSelectScreen = ({ route, navigation }) => {
  const { stories, setStories, setStoryNum, storyNum } = useContext(StoryContext);
  const [emotion, setEmotion] = useState(null);
  const { imgUri, comment } = route.params;

  const saveStory = () => {
    if (emotion === null) {
      Alert.alert('Warning', 'You should choose any emotion.', [
        {
          text: 'OK',
          style: 'cancel',
        },
      ]);
    } else {
      const newStory = {
        comment,
        emotion,
        imgLink: { uri: imgUri },
        date: new Date(),
      };
      setStories((prev) => [...prev, { ...newStory, id: storyNum }]);
      setStoryNum((prev) => prev + 1);
      navigation.navigate('StoryDetail', newStory);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.titleWrapper}>
        <Text style={styles.title}>How do you feel?</Text>
      </View>
      <View style={styles.emotionContainer}>
        <View style={styles.row}>
          <TouchableOpacity
            onPress={() => setEmotion('Love')}
            style={estyles(emotion == 'Love').emotion}
          >
            <Emotion emotion={'Love'} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setEmotion('Angry')}
            style={estyles(emotion == 'Angry').emotion}
          >
            <Emotion emotion={'Angry'} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setEmotion('Happy')}
            style={estyles(emotion == 'Happy').emotion}
          >
            <Emotion emotion={'Happy'} />
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity
            onPress={() => setEmotion('Joyful')}
            style={estyles(emotion == 'Joyful').emotion}
          >
            <Emotion emotion={'Joyful'} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setEmotion('Amazed')}
            style={estyles(emotion == 'Amazed').emotion}
          >
            <Emotion emotion={'Amazed'} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setEmotion('Sick')}
            style={estyles(emotion == 'Sick').emotion}
          >
            <Emotion emotion={'Sick'} />
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity
            onPress={() => setEmotion('Shy')}
            style={estyles(emotion == 'Shy').emotion}
          >
            <Emotion emotion={'Shy'} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setEmotion('Panic')}
            style={estyles(emotion == 'Panic').emotion}
          >
            <Emotion emotion={'Panic'} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setEmotion('Laugh')}
            style={estyles(emotion == 'Laugh').emotion}
          >
            <Emotion emotion={'Laugh'} />
          </TouchableOpacity>
        </View>
      </View>
      <BasicButton title="Compelete" handler={saveStory} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  titleWrapper: {
    alignItems: 'center',
    marginTop: 50,
  },
  title: {
    fontSize: 25,
  },
  emotionContainer: {
    aspectRatio: 1,
    padding: 20,
    justifyContent: 'space-evenly',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
});

const estyles = (isSelected) =>
  StyleSheet.create({
    emotion: {
      borderColor: isSelected ? ColorCode.PRIMARY : 'transparent',
      borderWidth: 5,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });

export default EmotionSelectScreen;
