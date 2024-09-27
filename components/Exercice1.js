import React from 'react';
import { TouchableOpacity, Button, Text, StyleSheet, View } from 'react-native';

export default function Exercice1({text1, text2}) {
  const onPress = () => {
    alert(`You tapped the button ! ${text1}`);
  };

  return (
    <View style={styles.container}>
      <Button
        onPress={() => {
          alert(`You tapped the button ! ${text2}`);
        }}
        title="Press Me"
        color="#ff0000"
        accessibilityLabel="Learn more about this red button"
      />
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.buttonText}>Press Me</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#008000',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: '#fff', 
    fontSize: 16,
  },
});
