import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Header = ({ title, onBack }) => (
  <View style={styles.header}>
    {onBack && <TouchableOpacity onPress={onBack}><Text style={styles.back}>◀</Text></TouchableOpacity>}
    <Text style={styles.title}>{title}</Text>
  </View>
);

const styles = StyleSheet.create({
  header: { flexDirection: 'row', alignItems: 'center', padding: 15, backgroundColor: '#f5f5f5' },
  back: { fontSize: 18, marginRight: 10 },
  title: { fontSize: 20, fontWeight: 'bold' },
});

export default Header;
