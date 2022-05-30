import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, Dimensions } from 'react-native';

import { EmotionName } from '../utils/constants';
import ArrowButton from '../components/ArrowButton';
import ImageBox from '../components/ImageBox';

const BoardScreen = () => {
  const [boardNum, setBoardNum] = useState(0);

  const onIncrease = () => {
    setBoardNum((boardNum + 1) % 10);
  };

  const onDecrease = () => {
    setBoardNum(boardNum - 1 == -1 ? 9 : boardNum - 1);
  };

  return (
    <View style={styles.contatiner}>
      <View style={styles.topContainer}>
        {/* My Memory 타이틀 */}
        <Text style={styles.title}>My Memory</Text>

        {/* Emotion Switch */}
        <View style={styles.emotionContainer}>
          <ArrowButton iconName="left" handler={onDecrease} />
          <View style={styles.emotionTitleWrap}>
            <Text style={styles.emotionTitle}>{EmotionName[boardNum]}</Text>
          </View>
          <ArrowButton iconName="right" handler={onIncrease} />
        </View>
      </View>

      <View style={styles.scroll}>
        <ScrollView>
          <View style={styles.imageList}>
            <ImageBox title="111" handler={onIncrease} />
            <ImageBox title="111" handler={onIncrease} />
            <ImageBox title="111" handler={onIncrease} />
          </View>

          <View style={styles.imageList}>
            <ImageBox title="211" handler={onIncrease} />
            <ImageBox title="211" handler={onIncrease} />
            <ImageBox title="211" handler={onIncrease} />
          </View>

          <View style={styles.imageList}>
            <ImageBox title="311" handler={onIncrease} />
            <ImageBox title="311" handler={onIncrease} />
            <ImageBox title="311" handler={onIncrease} />
          </View>

          <View style={styles.imageList}>
            <ImageBox title="411" handler={onIncrease} />
            <ImageBox title="411" handler={onIncrease} />
            <ImageBox title="411" handler={onIncrease} />
          </View>

          <View style={styles.imageList}>
            <ImageBox title="511" handler={onIncrease} />
            <ImageBox title="511" handler={onIncrease} />
            <ImageBox title="511" handler={onIncrease} />
          </View>

          <View style={styles.imageList}>
            <ImageBox title="611" handler={onIncrease} />
            <ImageBox title="611" handler={onIncrease} />
            <ImageBox title="611" handler={onIncrease} />
          </View>

          <View style={styles.imageList}>
            <ImageBox title="711" handler={onIncrease} />
            <ImageBox title="711" handler={onIncrease} />
            <ImageBox title="711" handler={onIncrease} />
          </View>

          <View style={styles.imageList}>
            <ImageBox title="811" handler={onIncrease} />
            <ImageBox title="811" handler={onIncrease} />
            <ImageBox title="811" handler={onIncrease} />
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  contatiner: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
    margin: 10,
    flex: 1,
  },
  topContainer: {
    flex: 2,
  },
  title: {
    color: 'black',
    fontSize: 25,
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
  imageList: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default BoardScreen;
