import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, Alert } from 'react-native';
import DocumentPicker from 'react-native-document-picker';
import RNZipArchive from 'react-native-zip-archive'; // For handling .cbz (zip) files

const ImportScreen = ({ navigation }) => {
  const [fileUri, setFileUri] = useState(null);

  // Function to pick a .cbz file
  const pickCBZFile = async () => {
    try {
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.allFiles],
      });

      // Check if the picked file is a .cbz file
      if (res.name.endsWith('.cbz')) {
        setFileUri(res.uri);
        handleCBZFile(res.uri);
      } else {
        Alert.alert('Error', 'Please select a valid .cbz file.');
      }
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        console.log('User canceled the picker');
      } else {
        console.error(err);
      }
    }
  };

  // Function to handle the .cbz file
  const handleCBZFile = async (uri) => {
    try {
      // Unzip the .cbz file to a temporary directory
      const unzipDestination = `${RNFS.DocumentDirectoryPath}/unzipped`;

      const unzippedPath = await RNZipArchive.unzip(uri, unzipDestination);

      // Log the unzipped file path
      console.log('Unzipped content:', unzippedPath);

      // You can now display the images from the unzipped content
      // For example, navigate to a book viewer screen
      navigation.navigate('BookViewer', { bookUri: unzippedPath });
    } catch (err) {
      console.error('Error extracting .cbz file:', err);
      Alert.alert('Error', 'Failed to extract the .cbz file.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Upload a .CBZ File</Text>
      <Button title="Select .cbz File" onPress={pickCBZFile} />
      {fileUri && <Text>Selected File: {fileUri}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  header: { fontSize: 24, marginBottom: 20 },
});

export default ImportScreen;
