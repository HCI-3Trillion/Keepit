import React, { useState } from 'react';
import {
  StyleSheet,
  KeyboardAvoidingView,
  ScrollView,
  Image,
  TextInput,
  View,
  Alert,
} from 'react-native';

import BasicButton from '../components/BasicButton';
import { ColorCode } from '../utils/constants';

const EditScreen = ({ route, navigation }) => {
  const [comment, setComment] = useState('');
  const { imgUri } = route.params;

  const pressButton = () => {
    if (comment === '') {
      Alert.alert('Warning', 'Please write any comments.', [
        {
          text: 'OK',
          style: 'cancel',
        },
      ]);
    } else {
      navigation.navigate('EmotionSelect', { comment, imgUri });
    }
  };

  return (
    <KeyboardAvoidingView style={styles.container}>
      <ScrollView>
        <View style={styles.imageWrapper}>
          <Image source={{ uri: imgUri }} style={styles.image} />
        </View>
      </ScrollView>
      <View style={styles.inputWrapper}>
        <TextInput
          style={styles.input}
          placeholder="Add a comment..."
          multiline
          numberOfLines={5}
          onChangeText={(newCmt) => setComment(newCmt)}
          textAlignVertical={'top'}
        />
        <BasicButton title="Choose Emotions" handler={pressButton} />
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageWrapper: {
    marginTop: 10,
    flex: 1,
    flexDirection: 'row',
    padding: 10,
    paddingTop: 20,
  },
  image: {
    flex: 1,
    aspectRatio: 1,
    borderRadius: 10,
  },

  inputWrapper: {
    padding: 10,
    paddingBottom: 30,
    borderRadius: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: ColorCode.GRAY1,
    borderRadius: 10,
    padding: 10,
  },
});

export default EditScreen;
