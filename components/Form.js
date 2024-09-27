import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Form() {
  const [nom, setNom] = useState('');
  const [prenom, setPrenom] = useState('');
  const [tele, setTele] = useState('');
  const navigation = useNavigation();
  const [confirme, setConfirme] = useState(false);

  function handleClick() {
   navigation.navigate('Profil', { nom, prenom, tele });
    setConfirme(true)
}

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Nom :</Text>
      <TextInput
        style={styles.input}
        placeholder="Taper votre nom"
        onChangeText={text => setNom(text)}
      />
      <Text style={styles.label}>Prénom :</Text>
      <TextInput
        style={styles.input}
        placeholder="Taper votre prénom"
        onChangeText={text => setPrenom(text)}
      />
      <Text style={styles.label}>Téléphone :</Text>
      <TextInput
        style={styles.input}
        placeholder="Taper votre téléphone"
        keyboardType="numeric"
        onChangeText={text => setTele(text)}
      />
      <TouchableOpacity style={styles.button} onPress={handleClick}>
        <Text style={styles.buttonText}>Confirmer</Text>
      </TouchableOpacity>
    {confirme && (
        <View style={styles.submittedInfo}>
          <Text style={styles.submittedText}>Nom: {nom}</Text>
          <Text style={styles.submittedText}>Prénom: {prenom}</Text>
          <Text style={styles.submittedText}>Téléphone: {tele}</Text>
        </View>
      )}
   
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
  input: {
    height: 40,
    width: 300,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#007bff',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 5,
    elevation: 3,
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  submittedInfo: {
    marginTop: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
  },
  submittedText: {
    fontSize: 16,
    marginBottom: 5,
  },
});