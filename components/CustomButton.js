import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const CustomButton = ({ title, onPress, style }) => (
  <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
    <Text style={styles.text}>{title}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: { backgroundColor: '#007BFF', padding: 12, borderRadius: 8, alignItems: 'center' },
  text: { color: '#fff', fontWeight: 'bold' },
});

export default CustomButton;
