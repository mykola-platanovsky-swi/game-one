import React, { useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import StartGameScreent from '../screens/StartGameScreen';

const Board = () => {
    const [isNewGame, setIsNewGame] = useState(true);

    const startGameHandler = () => {
        setIsNewGame(!isNewGame);
    };

    return (
        <View style={styles.board}>
            <View style={styles.escape}>
                <Button title="Здатися" onPress = {startGameHandler}/>
            </View>
            <StartGameScreent active={isNewGame}/>
        </View>
    );
};

const styles = StyleSheet.create({
    board: {
        width: '90%',
        height: '80%',
        backgroundColor: '#fff',
        marginTop: 30,
        alignItems: 'center',
        textAlignVertical: 'center',
    },
    escape:{
        width: '100%',
        alignItems: 'flex-start',
        marginTop: 20
    },
    button: {

    },

});

export default Board;