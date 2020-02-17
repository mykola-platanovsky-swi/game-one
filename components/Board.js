import React, { useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import Grid from './Grid';
import Info from './Info';

const Board = () => {
    const [isNewGame, setIsNewGame] = useState(false);
    const [currentNum, setCurrentNum] = useState(0);
    const [tryNum, setTryNum] = useState(3);

    const startGameHandler = () => {
        setIsNewGame(!isNewGame);
    };

    return (
        <View style={styles.board}>
            <View style={styles.escape}>
                <Button title="Здатися" onPress = {startGameHandler}/>
            </View>
            <Info next={"1"} active={isNewGame} try={tryNum}/>
            <Grid try={tryNum} next={"1"} active={isNewGame} />
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