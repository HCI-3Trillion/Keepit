import React, { useContext } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  ImageBackground,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { ColorCode, Topic } from '../utils/constants';
import Bubble from '../../assets/bubble.png';
import Plus from '../../assets/buttonImg.png';
import StoryContext from '../stores/StoryContext';

const dimensions = Dimensions.get('window');
const bubbleWidth = dimensions.height * 0.35 * 0.88;
const bubbleHeight = dimensions.height * 0.35;

const HomeScreen = ({ navigation }) => {
  const getRandom = (min, max) => Math.floor(Math.random() * (max - min) + min);
  const { stories } = useContext(StoryContext);

  const isSameDate = (storyDate, currDate) => {
    return (
      storyDate.getFullYear() == currDate.getFullYear() &&
      storyDate.getMonth() == currDate.getMonth() &&
      storyDate.getDate() == currDate.getDate()
    );
  };

  const checkPosting = () => {
    const newest = stories[stories.length - 1].date;
    const today = new Date();

    if (isSameDate(newest, today)) {
      Alert.alert('Warning', 'You can only upload one story a day.', [
        {
          text: 'OK',
          style: 'cancel',
        },
      ]);
    } else {
      navigation.navigate('Camera');
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.appName}>Keepit</Text>
      <View style={styles.bubbleContainer}>
        <ImageBackground style={styles.bubble} source={Bubble}>
          <Text style={styles.topic}>{Topic[getRandom(0, 10)]}</Text>
        </ImageBackground>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} title="Camera" onPress={checkPosting}>
          <Image style={{ width: 60, height: 60 }} source={Plus} />
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  appName: {
    flex: 0.5,
    color: ColorCode.PRIMARY,
    fontSize: 30,
    fontWeight: 'bold',
    letterSpacing: 2,
    marginLeft: 5,
    marginTop: 3,
  },
  bubbleContainer: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bubble: {
    justifyContent: 'center',
    width: bubbleWidth,
    height: bubbleHeight,
  },
  topic: {
    color: 'white',
    fontSize: 25,
    textAlign: 'center',
  },
  buttonContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {},
});

export default HomeScreen;
