import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const Articledetail = ({ route }) => {
  const { article } = route.params;
  return (
    <View style={styles.container}>
      <Image source={article.image} style={styles.image} />
      <Text style={styles.title}>{article.title}</Text>
      <Text style={styles.content}>{article.content}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#8B0000', // Dark red color
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
    margin: 16,
    alignItems: 'center', // Align items in the center
  },
  image: {
    width: '100%', // Adjusted width to fit container
    height: 200, // Set a fixed height for better aspect ratio
    marginBottom: 12,
    borderRadius: 10, // Applied border radius to image
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 12,
  },
  content: {
    fontSize: 16,
    color: '#f8f9fa',
    lineHeight: 24,
  },
});

export default Articledetail;
