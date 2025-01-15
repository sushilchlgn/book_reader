import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const BookCard = ({ title, author, cover, onPress }) => (
  <TouchableOpacity style={styles.card} onPress={onPress}>
    <Image source={{ uri: cover }} style={styles.cover} />
    <View style={styles.details}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.author}>{author}</Text>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  card: { flexDirection: 'row', padding: 10, marginVertical: 5, backgroundColor: '#fff', borderRadius: 8 },
  cover: { width: 50, height: 75, borderRadius: 4 },
  details: { marginLeft: 10, justifyContent: 'center' },
  title: { fontWeight: 'bold', fontSize: 16 },
  author: { color: '#555' },
});

export default BookCard;
