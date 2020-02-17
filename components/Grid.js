import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import Cell from './Cell';
import Info from './Info';

const Grid = ({navigation, numbers, active}) => {
    const [findNumber, setFindNumber] = useState(1);
    const [tries, setTries] = useState(3);
    const [restNums, setRestNums] = useState(35);
    const [isActive, setIsActive] = useState(active);
    
    const handleSelectedNum = (num) => {
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
            setIsActive(false);
            if(tries >= 0 && restNums === 0)
                navigation.navigate('Won');
            else
                navigation.navigate('LostGame');
        }
    };

    return (
        <View style={styles.container}>
            <Info next={findNumber} active={isActive} try={tries} style={styles.info} />
            <View style={styles.grid}>
                {numbers.map((number) => <Cell key={number.toString()} value={number} onReturnNum={handleSelectedNum} />)}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    grid: {
        minWidth: 310,
        minHeight: 310,
        width: 350,
        height: 350,
        marginTop: 30,
        backgroundColor: '#fef9e7',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
    },
    info: {
      
    }
});

export default Grid;