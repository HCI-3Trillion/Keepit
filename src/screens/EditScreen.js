import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Image, TextInput } from 'react-native';
import * as MediaLibrary from 'expo-media-library';

import BasicButton from '../components/BasicButton';

const EditScreen = ({ route }) => {
  const [hasPermission, setHasPermission] = useState(null);
  const { imgUri } = route.params;

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

  return (
    <View style={styles.container}>
      <Image source={{ uri: imgUri }} style={styles.image} />
      <TextInput style={styles.textinput} />
      <BasicButton title="Save" handler={saveImage} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textinput: {
    flex: 1,
  },
  image: {
    flex: 1,
  },
});

export default EditScreen;
