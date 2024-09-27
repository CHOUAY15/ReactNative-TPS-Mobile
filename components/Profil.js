import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Profil({ route }) {
  const { nom, prenom, tele } = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.item}>
        <Text style={styles.label}>Nom :</Text>
        <Text style={styles.text}>{nom}</Text>
      </View>
      <View style={styles.item}>
        <Text style={styles.label}>Prénom :</Text>
        <Text style={styles.text}>{prenom}</Text>
      </View>
      <View style={styles.item}>
        <Text style={styles.label}>Téléphone :</Text>
        <Text style={styles.text}>{tele}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  item: {
    marginBottom: 20,
  },
  text: {
    fontSize: 20,
    color: '#333',
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#007bff',
  },
});