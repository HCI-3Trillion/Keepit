import React, { useState, useContext } from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';
import { StackActions } from '@react-navigation/native';

import ColorContext from '../stores/ColorContext';
import { Palette } from '../utils/constants';

import BasicButton from '../components/BasicButton';
import Emotion from '../components/Emotion';
import ColorCircle from '../components/ColorCircle';

const ColorSelectScreen = ({ route, navigation }) => {
  const { emotion } = route.params;
  const { colors, setColors } = useContext(ColorContext);
  const [selectedColor, setSelectedColor] = useState(colors[emotion]);

  const changeColor = () => {
    setColors((prev) => {
      const newColors = Object.assign({}, prev);
      newColors[emotion] = selectedColor;
      return newColors;
    });
    navigation.dispatch(StackActions.popToTop());
  };

  return (
    <View>
      <View style={styles.emotionContainer}>
        <Emotion emotion={emotion} preview={selectedColor} />
      </View>
      <View style={styles.titleWrapper}>
        <Text style={styles.title}>Select color</Text>
      </View>
      <View style={styles.colorContainer}>
        <FlatList
          key={'#'}
          data={Palette}
          renderItem={({ item }) => (
            <ColorCircle
              isSelected={selectedColor == item}
              color={item}
              handler={() => {
                setSelectedColor(item);
              }}
            />
          )}
          keyExtractor={(item) => item.toString()}
          numColumns={5}
        />
      </View>
      <BasicButton title="Complete" handler={changeColor} />
    </View>
  );
};

const styles = StyleSheet.create({
  emotionContainer: {
    alignItems: 'center',
    margin: 30,
  },
  titleWrapper: {
    alignItems: 'center',
    marginBottom: 30,
  },
  title: {
    fontSize: 25,
  },
  colorContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },
});

export default ColorSelectScreen;
