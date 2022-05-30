import React, { useState } from 'react';
import { StyleSheet, KeyboardAvoidingView, ScrollView, Image, TextInput, View } from 'react-native';

import BasicButton from '../components/BasicButton';
import { ColorCode } from '../utils/constants';

const EditScreen = ({ route, navigation }) => {
  const [comment, setComment] = useState('');
  const { imgUri } = route.params;

  return (
    <KeyboardAvoidingView style={styles.container} behavior={'padding'}>
      <ScrollView>
        <View style={styles.contentContainer}>
          <View style={styles.imageWrapper}>
            <Image source={{ uri: imgUri }} style={styles.image} />
          </View>
          <View style={styles.inputWrapper}>
            <TextInput
              style={styles.input}
              placeholder="Add a comment..."
              multiline
              numberOfLines={5}
              onChangeText={(newCmt) => setComment(newCmt)}
            />
          </View>
          <BasicButton
            title="Choose Emotions"
            handler={() => navigation.navigate('EmotionSelect', { comment, imgUri })}
          />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {},
  inputWrapper: {
    padding: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: ColorCode.GRAY1,
    borderRadius: 10,
    padding: 10,
  },
  imageWrapper: {
    flex: 1,
    flexDirection: 'row',
  },
  image: {
    flex: 1,
    aspectRatio: 1,
  },
});

export default EditScreen;
