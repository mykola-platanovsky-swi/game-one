import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import WelcomeScreen from './screens/WelcomeScreen';
import StartGameScreen from './screens/StartGameScreen';
import IntroScreen from './screens/IntroScreen';

// import React from 'react';
// import { StyleSheet, View, Button } from 'react-native';
// import Board from './components/Board';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Board />
//       <View style={styles.button}>
//         <Button 
//           title="Ще разок? Піднажми..." 
//           color={'#f7dc6f'}
//         />
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#ca6f1e',
//     alignItems: 'center',
//     justifyContent: 'center',
//       },
//   button: {
//     paddingTop: 10,
//     width: '90%',
//   }
// });

const navigator = createStackNavigator(
  {
    Welcome: WelcomeScreen,
    StartGame: StartGameScreen, 
    Intro: IntroScreen
  },
  {
    initialRouteName: 'Welcome',
    defaultNavigationOptions: {
      title: 'APAC Game Studio'
    }
  }
);

export default createAppContainer(navigator);
