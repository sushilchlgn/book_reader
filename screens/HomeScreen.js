import React from 'react';
import { View, FlatList, StyleSheet, Button } from 'react-native';
import BookCard from '../components/BookCard';

const HomeScreen = ({ navigation }) => {
  const books = [
    { id: '1', title: 'Book One', author: 'Author One', cover: 'https://via.placeholder.com/50' },
    { id: '2', title: 'Book Two', author: 'Author Two', cover: 'https://via.placeholder.com/50' },
  ];

  return (
    <View style={styles.container}>
      <FlatList
        data={books}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <BookCard
            title={item.title}
            author={item.author}
            cover={item.cover}
            onPress={() => navigation.navigate('BookViewer', { book: item })}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10, backgroundColor: '#f0f0f0' },
});

export default HomeScreen;
