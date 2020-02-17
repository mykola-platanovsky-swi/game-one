import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text } from 'react-native';

const formatNumber = number => `0${number}`.slice(-2);
const getRamaining = (time) => {
    const mins = Math.floor(time / 60);
    const secs = time - mins * 60;
    return { mins: formatNumber(mins), secs: formatNumber(secs) };
}

const Timer = props => {
    const [remainingSecs, setRemainingSecs] = useState(0);
    const [isActive, setIsActive] = useState(true);
    const { mins, secs } = getRamaining(remainingSecs);

    const toogle = () => {
        setIsActive(!isActive);
        setRemainingSecs(0);
    };

    useEffect(() => {
        toogle();
    }, [props.active]);

    useEffect(() => {
        let interval = null;
        setIsActive(isActive);
        if (isActive) {
            interval = setInterval(() => {
                setRemainingSecs(remainingSecs => remainingSecs + 1);
            }, 1000);
        } else if (!isActive && remainingSecs !== 0) {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [isActive, remainingSecs]);

    return (
        <View>
            <Text>{`${mins}:${secs}`}</Text>
        </View>
    );
};

const styles = StyleSheet.create({

});

export default Timer;