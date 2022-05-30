import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import * as MediaLibrary from 'expo-media-library';

import BasicButton from '../components/BasicButton';
import { ColorCode } from '../utils/constants';

import Amazed from '../emotions/Amazed';
import Angry from '../emotions/Angry';
import Happy from '../emotions/Happy';
import Joyful from '../emotions/Joyful';
import Laugh from '../emotions/Laugh';
import Love from '../emotions/Love';
import Panic from '../emotions/Panic';
import Shy from '../emotions/Shy';
import Sick from '../emotions/Sick';

const EmotionSelectScreen = ({ route, navigation }) => {
  const [hasPermission, setHasPermission] = useState(null);
  const [emotion, setEmotion] = useState(null);
  const { imgUri, comment } = route.params;

  useEffect(() => {
    getPermissions();
  }, []);

  const getPermissions = async () => {
    const { status } = await MediaLibrary.getPermissionsAsync();
    if (status !== 'granted') {
      const permission = await MediaLibrary.requestPermissionsAsync();
      setHasPermission(permission.status === 'granted');
    }
  };

  const saveImage = async () => {
    const asset = await MediaLibrary.createAssetAsync(imgUri);
    const album = await MediaLibrary.getAlbumAsync('Keepit');

    if (album === null) {
      await MediaLibrary.createAlbumAsync('Keepit', asset, false);
    } else {
      await MediaLibrary.addAssetsToAlbumAsync(asset, album.id, false);
    }
  };

  const saveStory = async () => {
    await saveImage();
    // comment, emotion, imgUri 저장
    navigation.navigate('Home');
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
            <Love color={ColorCode.PINK} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setEmotion('Angry')}
            style={estyles(emotion == 'Angry').emotion}
          >
            <Angry color={ColorCode.RED} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setEmotion('Happy')}
            style={estyles(emotion == 'Happy').emotion}
          >
            <Happy color={ColorCode.YELLOW} />
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity
            onPress={() => setEmotion('Joyful')}
            style={estyles(emotion == 'Joyful').emotion}
          >
            <Joyful color={ColorCode.GREEN} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setEmotion('Amazed')}
            style={estyles(emotion == 'Amazed').emotion}
          >
            <Amazed color={ColorCode.SKYBULE} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setEmotion('Sick')}
            style={estyles(emotion == 'Sick').emotion}
          >
            <Sick color={ColorCode.BLUE} />
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity
            onPress={() => setEmotion('Shy')}
            style={estyles(emotion == 'Shy').emotion}
          >
            <Shy color={ColorCode.PURPLE} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setEmotion('Panic')}
            style={estyles(emotion == 'Panic').emotion}
          >
            <Panic color={ColorCode.GRAY} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setEmotion('Laugh')}
            style={estyles(emotion == 'Laugh').emotion}
          >
            <Laugh color={ColorCode.BEIGE} />
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
