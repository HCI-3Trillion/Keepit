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
  const [helpVisible, setHelpVisible] = React.useState(false);
  const getRandom = (min, max) => Math.floor(Math.random() * (max - min) + min);
  const toggle = () => setHelpVisible(!helpVisible);

  const checkPosting = () => {
    // 최신 기록의 날짜 확인
    var newest = stories[stories.length - 1].date;
    var nYear = newest.getFullYear();
    var nMonth = newest.getMonth();
    var nDay = newest.getDate();

    // 오늘 날짜 구하기
    var today = new Date();
    var tYear = today.getFullYear();
    var tMonth = today.getMonth();
    var tDay = today.getDate();

    //날짜 비교
    var newestDate = new Date(nYear, nMonth, nDay);
    var todayDate = new Date(tYear, tMonth, tDay);
    if (newestDate.getTime() == todayDate.getTime()) {
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
        <TouchableOpacity title="help" onPress={toggle}>
          <Image style={{ width: 40, height: 40 }} source={QuestionMark} />
        </TouchableOpacity>
      </View>
      <View style={styles.bubbleContainer}>
        <ImageBackground style={styles.bubble} source={Bubble}>
          <Text style={styles.topic}>{Topic[getRandom(0, Topic.length)]}</Text>
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
    padding: '0px 20px',
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
