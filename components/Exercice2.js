// import React, { useState } from 'react';
// import {  Text, TextInput, Button, StyleSheet } from 'react-native';

// export default function Exercice1() {
//     const [name, setName] = useState('');

//     const onPress = () => {
//         alert('Alert', `Hello, ${name}!`);
//     };

//     return (
//         <>
//             <Text style={styles.label}>What is your name?</Text>
//             <TextInput
//                 style={styles.input}
//                 placeholder="Enter your name"
//                 value={name}
//                 onChangeText={text => setName(text)}
//             />
//             <Button
//                 onPress={onPress}
//                 title="SAY HELLO"
//                 color="#1E90FF"
//                 accessibilityLabel="Learn more about this blue button"
//             />
//         </>
//     );
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//         padding: 110,
//         backgroundColor: '#f0f0f0',
//     },
//     label: {
//         fontSize: 18,
//         marginBottom: 10,
//     },
//     input: {
//         width: '100%',
//         padding: 10,
//         borderColor: '#ccc',
//         borderWidth: 1,
//         borderRadius: 5,
//         marginBottom: 20,
//         backgroundColor: '#fff',
//     },
// });

import React, { useState } from 'react';
import {  Text, TextInput, StyleSheet } from 'react-native';

export default function Exercice2() {
  const [text, setText] = useState('');

  return (
    <>
      <Text style={styles.label}>Enter some text:</Text>
      <TextInput
        style={styles.input}
        placeholder="Type here"
        value={text}
        onChangeText={newText => setText(newText)}
      />
      <Text style={styles.displayText}>{text}</Text>
    </>
  );
}

const styles = StyleSheet.create({
 
  label: {
    fontSize: 18,
    marginBottom: 10,
  },
  input: {
    width: '100%',
    padding: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
    backgroundColor: '#fff',
  },
  displayText: {
    fontSize: 18,
    marginTop: 20,
  },
});

