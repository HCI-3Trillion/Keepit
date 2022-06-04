import React, { useState, useContext } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  ImageBackground,
  TouchableOpacity,
  Alert,
  Modal,
  ScrollView,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { ColorCode, Topic, Help } from '../utils/constants';
import Bubble from '../../assets/bubble.png';
import Plus from '../../assets/buttonImg.png';
import QuestionMark from '../../assets/helpImg.png';
import StoryContext from '../stores/StoryContext';
import BasicButton from '../components/BasicButton.js';

const dimensions = Dimensions.get('window');
const bubbleWidth = dimensions.height * 0.35 * 0.88;
const bubbleHeight = dimensions.height * 0.35;
const helpHeight = dimensions.height * 0.9;

const HomeScreen = ({ navigation }) => {
  const { stories } = useContext(StoryContext);
  const [helpVisible, setHelpVisible] = useState(false);
  const today = new Date().getDate();
  const toggle = () => setHelpVisible(!helpVisible);

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
      <View style={styles.topContainer}>
        <Text style={styles.appName}>Keepit</Text>
        <TouchableOpacity style={{ padding: 3 }} title="help" onPress={toggle}>
          <Image style={{ width: 40, height: 40 }} source={QuestionMark} />
        </TouchableOpacity>
      </View>
      <View style={styles.bubbleContainer}>
        <ImageBackground style={styles.bubble} source={Bubble}>
          <Text style={styles.topic}>{Topic[today % Topic.length]}</Text>
        </ImageBackground>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity title="Camera" onPress={checkPosting}>
          <Image style={{ width: 60, height: 60 }} source={Plus} />
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
      <Modal
        styles={{ position: 'absolute' }}
        transparent={true}
        animationType="slide"
        visible={helpVisible}
        onRequestClose={() => {
          setHelpVisible(!helpVisible);
        }}
      >
        <View style={styles.helpContainer}>
          <Text style={{ fontSize: 17, fontWeight: 'bold' }}>FAQs</Text>
          <ScrollView showsVerticalScrollIndicator={false}>
            <Text>{Help}</Text>
          </ScrollView>
          <BasicButton title="Close" handler={toggle} />
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  topContainer: {
    flexDirection: 'row',
    flex: 0.5,
    justifyContent: 'space-between',
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
    padding: 20,
  },
  buttonContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {},
  helpContainer: {
    height: helpHeight,
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});

export default HomeScreen;
