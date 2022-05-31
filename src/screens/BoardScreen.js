import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, Dimensions, TouchableOpacity } from 'react-native';

import { EmotionName } from '../utils/constants';
import ArrowButton from '../components/ArrowButton';
import ImageBox from '../components/ImageBox';
import Emotion from '../components/Emotion';
import stories from '../stores/stories';

const BoardScreen = ({ navigation }) => {
  const [boardNum, setBoardNum] = useState(0);
  const [storyList, setStoryList] = useState(stories.sort((a, b) => b.id - a.id));
  const [emotionTag, setEmotionTag] = useState(<Text style={styles.emotionTitle}>ALL</Text>);

  useEffect(() => {
    const list =
      boardNum == 0
        ? stories.sort((a, b) => b.id - a.id)
        : stories
            .filter((story) => story.emotion == EmotionName[boardNum])
            .sort((a, b) => b.id - a.id);
    setStoryList(list);
  }, [boardNum]);

  const checkEmotion = (boardNum) => {
    if (boardNum === 0) setEmotionTag(<Text style={styles.emotionTitle}>ALL</Text>);
    else if (boardNum !== 0) setEmotionTag(<Emotion emotion={EmotionName[boardNum]} />);
  };

  const onIncrease = () => {
    checkEmotion((boardNum + 1) % 10);
    setBoardNum((boardNum + 1) % 10);
  };

  const onDecrease = () => {
    checkEmotion(boardNum - 1 == -1 ? 9 : boardNum - 1);
    setBoardNum(boardNum - 1 == -1 ? 9 : boardNum - 1);
  };

  const moveToStoryDetail = ({ id, comment, date, emotion, imgLink }) => {
    navigation.navigate('StoryDetail', { id, comment, date, emotion, imgLink });
  };

  return (
    <View style={styles.contatiner}>
      <View style={styles.topContainer}>
        <Text style={styles.title}>My Memory</Text>

        <View style={styles.emotionContainer}>
          <ArrowButton style={styles.emotionButton} iconName="left" handler={onDecrease} />
          <View style={styles.emotionTitleWrap}>{emotionTag}</View>
          <ArrowButton style={styles.emotionButton} iconName="right" handler={onIncrease} />
        </View>
      </View>
      <View style={styles.scroll}>
        <FlatList
          key={'#'}
          data={storyList}
          renderItem={({ item }) => (
            <ImageBox imgLink={item.imgLink} handler={() => moveToStoryDetail(item)} />
          )}
          keyExtractor={(item) => item.id}
          numColumns={3}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  contatiner: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 15,
    marginTop: 10,
    flex: 1,
  },
  topContainer: {
    flex: 2,
    alignItems: 'center',
  },
  title: {
    color: 'black',
    fontSize: 25,
    marginBottom: 20,
    flex: 1,
  },
  emotionContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 30,
    flex: 1,
  },
  emotionTitleWrap: {
    alignItems: 'center',
    width: 100,
  },
  emotionButton: {
    alignItems: 'center',
  },
  emotionTitle: {
    color: 'black',
    fontSize: 15,
  },
  scroll: {
    flex: 8,
    width: Dimensions.get('window').width,
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

export default BoardScreen;
