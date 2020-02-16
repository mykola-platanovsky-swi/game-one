import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import Grid from './Grid';
import Info from './Info';

const Board = () => {
    return (
        <View style={styles.board}>
            <View style={styles.escape}>
                <Button title="Здатися"/>
            </View>
            <Info/>
            <Grid />
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

    }
});

export default Board;