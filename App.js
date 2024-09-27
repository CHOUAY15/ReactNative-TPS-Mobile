// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';
// // import Exercice1 from './components/Exercice1';
// import Exercice2 from './components/Exercice2';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Exercice2 />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Articlelist from './components/Articlelist';
import Articledetail from './components/Articledetail';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
   <Stack.Navigator
  initialRouteName="Films"
  screenOptions={{
    statusBarColor: '#008000', 
    headerTintColor: '#FF0000',
    headerTitleAlign: 'center',
  }}
>

        <Stack.Screen
          name="Films"
          component={Articlelist}
        />
        <Stack.Screen
          name="FilmDetails"
          component={Articledetail}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// export default App;


// import React from 'react';
// import { StyleSheet, View } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack'; 

// import Form from './TP4/components/Form'; 
// import Profil from './TP4/components/Profile'; 
// import Article from './TP4/components/Article'; 
// import ArticleDetails from './TP4/components/ArticleDetails'; 

// const Stack = createNativeStackNavigator();

// export default function App() {
 
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName='Form'>
//         <Stack.Screen name="Form" component={Form} />
//         <Stack.Screen name="Profil" component={Profil} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }