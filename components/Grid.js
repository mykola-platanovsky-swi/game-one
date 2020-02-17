import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Cell from './Cell';
import Info from './Info';

const Grid = props => {
    const [findNumber, setFindNumber] = useState(1);
    const [tries, setTries] = useState(3);
    const [restNums, setRestNums] = useState(35);
    let activeGame = props.active;
    const handleSelectedNum = (num) => {
        // console.log("find", findNumber);
        // console.log('restNums', restNums);
        
        if (tries > 0 && restNums > 0) {
            if (num !== findNumber) {
                setTries(tries - 1);
            }
            else {
                setFindNumber(num + 1);
                setRestNums(restNums-1);
            }
        }
        else {
            console.log("stop the timer and game");
            activeGame = false;
        }
    };

    return (
        <View>
            <Info next={findNumber} active={activeGame} try={tries} />
            <View style={styles.main}>
                {props.numbers.map((number) => <Cell key={number.toString()} value={number} onReturnNum={handleSelectedNum} />)}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    main: {
        width: 310,
        height: 310,
        marginTop: 100,
        backgroundColor: '#ccc',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between'
    },
});

export default Grid;