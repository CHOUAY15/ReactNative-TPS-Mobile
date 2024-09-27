import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

const data = [
  { id: '1', title: 'Captaine America', content: 'Description du film 1: Une aventure épique dans un monde fantastique.', image: require('../assets/images/america.jpg') },
  { id: '2', title: 'Spider-man', content: 'Description du film 2: Une comédie romantique qui réchauffe le cœur.', image: require('../assets/images/spider.jpg') },
  { id: '3', title: 'Hulk', content: 'Description du film 3: Un thriller palpitant plein de rebondissements.', image: require('../assets/images/hulk.jpg') },
];

const Articlelist = ({ navigation }) => {
  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.itemContainer}
      onPress={() => navigation.navigate('FilmDetails', { article: item })}
    >
      <Text style={styles.itemTitle}>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      contentContainerStyle={styles.listContainer}
    />
  );
};

const styles = StyleSheet.create({
  listContainer: {
    padding: 16,
    backgroundColor: '#f0f0f0',
  },
  itemContainer: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    borderRadius: 10,
    backgroundColor: '#8B0000', // Dark red color
    marginBottom: 8,
  },
  itemTitle: {
    color: '#fff', // White text for better contrast
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Articlelist;
