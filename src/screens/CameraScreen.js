import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Camera } from 'expo-camera';
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
const CameraScreen = ({ navigation }) => {
  const [hasPermission, setHasPermission] = useState(null);
  const [camera, setCamera] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);

  useEffect(() => {
    getPermissions();
  }, []);

  const getPermissions = async () => {
    const { status } = await Camera.requestCameraPermissionsAsync();
    setHasPermission(status === 'granted');
  };

  const takePicture = async () => {
    if (camera) {
      const { uri } = await camera.takePictureAsync();
      navigation.navigate('Edit', { imgUri: uri });
    }
  };

  const pressFlip = () => {
    setType(
      type === Camera.Constants.Type.back ? Camera.Constants.Type.front : Camera.Constants.Type.back
    );
  };

  const pressFlash = () => {
    setType(
      type === Camera.Constants.FlashMode.off
        ? Camera.Constants.FlashMode.on
        : Camera.Constants.FlashMode.off
    );
  };

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
      <View style={styles.cameraContainer}>
        <Camera style={styles.camera} ref={(ref) => setCamera(ref)} type={type} />
      </View>

      <View style={styles.buttonContainer}>
        {/* 플래쉬 */}
        <TouchableOpacity style={styles.buttonFlash} onPress={pressFlash}>
          <MaterialIcons name="flash-off" size={40} color="white" />
        </TouchableOpacity>

        {/* 사진 찍기 */}
        <TouchableOpacity style={styles.buttonTakePicture} onPress={takePicture}>
          <MaterialIcons name="camera" size={90} color="white" />
        </TouchableOpacity>

        {/* 화면 전환 */}
        <TouchableOpacity style={styles.buttonFlip} onPress={pressFlip}>
          <MaterialCommunityIcons name="rotate-3d-variant" size={40} color="white" />
        </TouchableOpacity>
      </View>

      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  cameraContainer: {
    flex: 8,
    flexDirection: 'row',
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 2,
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonFlash: {
    flex: 1,
    alignItems: 'center',
  },
  buttonTakePicture: {
    flex: 2,
    alignItems: 'center',
  },
  buttonFlip: {
    flex: 1,
    alignItems: 'center',
  },
});

export default CameraScreen;
