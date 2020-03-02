import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Vibration } from 'react-native';
import Cell from './Cell';
import Info from './Info';
import { Audio } from "expo-av";
import AnimatedItem from './AnimatedItem';


const Board = ({ navigation, numbers }) => {
    const [findNumber, setFindNumber] = useState(1);
    const [tries, setTries] = useState(3);
    const [restNums, setRestNums] = useState(35);
    const [isActive, setIsActive] = useState(true);

    const sound = new Audio.Sound();

    const loadAndPlay = () => {
        (async () => {
            await sound.loadAsync(require('../assets/game.mp3'));
            sound.playAsync();
        })();
    }

    const stopPlay = () => {
        if (sound != null && sound != undefined) {
            setIsActive(false);
            sound.stopAsync();
        }
    }

    useEffect(() => {
        loadAndPlay();
        return () => stopPlay();
    }, []);

    const handleSelectedNum = (num) => {
        if (tries > 0 && restNums > 0) {
            if (num !== findNumber) {
                setTries(tries - 1);
                Vibration.vibrate(500);
            }
            else {
                setFindNumber(num + 1);
                setRestNums(restNums - 1);
                Vibration.vibrate(70);
            }
        }
        else {
            setIsActive(false);
            if (tries >= 0 && restNums === 0)
                navigation.navigate('Won');
            else
                navigation.navigate('LostGame');
        }
    };

    return (
        <View style={styles.container}>
            <Info next={findNumber} active={isActive} try={tries} />
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
        alignItems: 'center',
    },
    grid: {
        minWidth: 310,
        minHeight: 310,
        width: 330,
        height: 330,
        marginTop: 90,
        //backgroundColor: '#000',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        //shadowColor: 'black',
        //shadowOffset: { width: 0, height: 2 },
        //shadowRadius: 6,
        //shadowOpacity: 0.26,
        elevation: 8,
    }
});

export default Board;