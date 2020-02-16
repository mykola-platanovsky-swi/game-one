import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Cell from './Cell';

const Grid = () => {
    let numbers = [];
    for (var i = 1; i <= 36; i++)
        numbers.push(i);
    
    numbers = numbers.sort(() => Math.random() - 0.5);
    return (
        <View style={styles.main}>
            {numbers.map((number) => <Cell key={number.toString()} value={number} />)}
        </View>
    );
};

const styles = StyleSheet.create({
    main: {
        width: 310,
        height: 310,
        marginTop: 100,
        //backgroundColor: '#fff',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between'
    },
});

export default Grid;