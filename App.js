import React from 'react';
import { StyleSheet, View, Button } from 'react-native';
import Board from './components/Board';

export default function App() {
  return (
    <View style={styles.container}>
      <Board />
      <View style={styles.button}>
        <Button 
          title="Ще разок? Піднажми..." 
          color={'#f7dc6f'}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ca6f1e',
    alignItems: 'center',
    justifyContent: 'center',
      },
  button: {
    paddingTop: 10,
    width: '90%',
  }
});
