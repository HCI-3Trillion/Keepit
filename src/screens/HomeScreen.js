import React from 'react';
import { StyleSheet, Text, View, Button, Image, Dimensions } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { ColorCode } from '../utils/constants';
import { ImageBackground, TouchableOpacity } from 'react-native-web';

const dimensions = Dimensions.get('window');
const bubbleWidth = dimensions.height * 0.35 * 0.88;
const bubbleHeight = dimensions.height * 0.35;

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.appName}>Keepit</Text>
      <View style={styles.bubbleContainer}>
        <ImageBackground style={styles.bubble} source={require('../../assets/bubble.png')}>
          <Text style={styles.topic}>How's the weather today?</Text>
        </ImageBackground>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          title="Camera"
          onPress={() => navigation.navigate('Camera')}
        >
          <Image style={{ width: 60, height: 60 }} source={require('../../assets/buttonImg.png')} />
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
  },
  bubbleContainer: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bubble: {
    alignItems: 'center',
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
    justifyContent: 'top',
  },
  button: {},
});

export default HomeScreen;
