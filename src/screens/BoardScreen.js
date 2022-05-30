import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, SafeAreaView, Dimensions } from 'react-native';

import { EmotionName } from '../utils/constants';
import ArrowButton from '../components/ArrowButton';
import ImageBox from '../components/ImageBox';

import stories from '../stores/stories';

const BoardScreen = () => {
  const [boardNum, setBoardNum] = useState(0);
  const [storyList, setStoryList] = useState(stories.reverse());

  useEffect(() => {
    const list =
      boardNum == 0
        ? stories.reverse()
        : stories.reverse().filter((story) => story.emotion == EmotionName[boardNum]);
    setStoryList(list);
  }, [boardNum]);

  const onIncrease = () => {
    setBoardNum((boardNum + 1) % 10);
  };

  const onDecrease = () => {
    setBoardNum(boardNum - 1 == -1 ? 9 : boardNum - 1);
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
          renderItem={({ item }) => <ImageBox id={item.id} />}
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
