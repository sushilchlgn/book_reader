import React, { useState, useEffect } from 'react';
import { View, FlatList, Image, StyleSheet, Text } from 'react-native';
import RNFS from 'react-native-fs';  // For filesystem access

const BookViewerScreen = ({ route }) => {
  const { bookUri } = route.params;  // Get the unzipped file path passed from ImportScreen
  const [imagePaths, setImagePaths] = useState([]);

  // Fetch image files after unzipping the .cbz file
  useEffect(() => {
    const fetchImages = async () => {
      try {
        // Read the contents of the unzipped directory
        const files = await RNFS.readDir(bookUri);
        const imageFiles = files.filter((file) => file.name.endsWith('.jpg') || file.name.endsWith('.png'));

        // Set the image paths to display
        setImagePaths(imageFiles);
      } catch (err) {
        console.error('Error reading image files:', err);
      }
    };

    fetchImages();
  }, [bookUri]);  // Re-fetch images if bookUri changes

  return (
    <View style={styles.container}>
      {imagePaths.length > 0 ? (
        <FlatList
          data={imagePaths}
          keyExtractor={(item) => item.path}
          renderItem={({ item }) => (
            <Image source={{ uri: item.path }} style={styles.image} />
          )}
        />
      ) : (
        <Text>Loading images...</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#000' },
  image: { width: '100%', height: 300, marginBottom: 10 },
});

export default BookViewerScreen;
