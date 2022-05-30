import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, Dimensions } from 'react-native';

import { EmotionName } from '../utils/constants';
import ArrowButton from '../components/ArrowButton';
import ImageBox from '../components/ImageBox';

import stories from '../stores/stories';

const BoardScreen = ({ navigation }) => {
  const [boardNum, setBoardNum] = useState(0);
  const [storyList, setStoryList] = useState(stories.sort((a, b) => b.id - a.id));

  useEffect(() => {
    const list =
      boardNum == 0
        ? stories.sort((a, b) => b.id - a.id)
        : stories
            .filter((story) => story.emotion == EmotionName[boardNum])
            .sort((a, b) => b.id - a.id);
    setStoryList(list);
  }, [boardNum]);

  const onIncrease = () => {
    setBoardNum((boardNum + 1) % 10);
  };

  const onDecrease = () => {
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
          <ArrowButton iconName="left" handler={onDecrease} />
          <View style={styles.emotionTitleWrap}>
            <Text style={styles.emotionTitle}>{EmotionName[boardNum]}</Text>
          </View>
          <ArrowButton iconName="right" handler={onIncrease} />
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
  },
  emotionContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 30,
  },
  emotionTitleWrap: {
    width: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emotionTitle: {
    color: 'black',
    fontSize: 15,
  },
  scroll: {
    flex: 9,
    width: Dimensions.get('window').width,
  },
});

export default BoardScreen;
