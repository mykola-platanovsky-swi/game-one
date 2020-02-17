import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Cell from './Cell';
import Timer from './Timer';

const Grid = props => {
    let numbers = [];
    const [curNum, setCurNum] = useState(0);

    for (var i = 1; i <= 36; i++)
        numbers.push(i);

    numbers = numbers.sort(() => Math.random() - 0.5);
    let temp = 0;
    const handleSelectedNum = (num) => {
        setCurNum(num);
    };

    return (
        <View>
            <View style={styles.main}>
                {numbers.map((number) => <Cell key={number.toString()} value={number} onReturnNum={handleSelectedNum} />)}
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