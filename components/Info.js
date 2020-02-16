import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Info = () => {
    return (
        <View style={styles.info}>
            <View style={styles.advice}><Text>Шукай: 8</Text></View>
            <View style={styles.timer}><Text>00:12</Text></View>
        </View>
    );
};

const styles = StyleSheet.create({
    info: {
        paddingTop: 10,
        flexDirection: 'row',
        width: '90%'
    },
    advice: {
        width: '50%',
        height: 30,
        backgroundColor: 'green',
    },
    timer: {
        height: 30,
        backgroundColor: 'red',
        width: '50%'
    }
});

export default Info;