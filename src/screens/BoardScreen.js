import React, {useState} from 'react';
import { StyleSheet,Text, View, Button } from 'react-native';

import { EmotionName } from '../utils/constants';
import ArrowButton from '../components/ArrowButton';

const BoardScreen = () => {
  const [boardNum, setBoardNum] = useState(0);

  const onIncrease = () => {
    setBoardNum((boardNum + 1)%10);
  }

  const onDecrease = () => {
    setBoardNum((boardNum - 1)==-1?9:boardNum-1);
  }

  return (
    <View>
      {/* My Memory 타이틀 */}
      <View style={styles.contatiner}>
        <Text style={styles.title}>My Memory</Text>
      </View>

      {/* Emotion Switch */}
      <View style={styles.emotionContainer}>
        <ArrowButton iconName="left" handler={onDecrease}/>
        <View style={styles.emotionTitleWrap}>
          <Text style={styles.emotionTitle}>{ EmotionName[boardNum] }</Text>
        </View>
        <ArrowButton iconName="right" handler={onIncrease}/>
      </View>

      {/* Board */}
    </View>
  );
};

const styles = StyleSheet.create({
  contatiner: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
    margin: 10,
  },
  title: {
    color: 'black',
    fontSize: 25,
  },
  emotionContainer:{
    alignItems: 'center',
    flexDirection: "row",
    justifyContent: 'space-around',
  },
  emotionTitleWrap:{
    width: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emotionTitle:{
    color: 'black',
    fontSize: 15,
  },
});


export default BoardScreen;
